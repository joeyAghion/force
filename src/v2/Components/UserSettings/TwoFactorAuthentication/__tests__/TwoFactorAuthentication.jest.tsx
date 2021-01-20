import React from "react"
import { graphql } from "react-relay"

import { createTestEnv } from "v2/DevTools/createTestEnv"

import { TwoFactorAuthenticationQueryResponse } from "v2/__generated__/TwoFactorAuthenticationQuery.graphql"
import { createMockFetchQuery } from "v2/DevTools"
import { TwoFactorAuthenticationRefetchContainer } from "../"
import {
  AppEnabledWithBackupCodesQueryResponse,
  AppEnabledWithoutBackupCodesQueryResponse,
  BackupSecondFactors,
  CreateAppSecondFactorMutationSuccessResponse,
  CreateBackupSecondFactorsMutationSuccessResponse,
  CreateSmsSecondFactorMutationSuccessResponse,
  DeliverSmsSecondFactorMutationSuccessResponse,
  EnableAppSecondFactorMutationErrorResponse,
  EnableAppSecondFactorMutationSuccessResponse,
  EnableSmsSecondFactorMutationInvalidResponse,
  EnableSmsSecondFactorMutationSuccessResponse,
  UpdateAppSecondFactorMutationSuccessResponse,
  UpdateSmsSecondFactorMutationSuccessResponse,
} from "./fixtures"
import { TwoFactorAuthenticationTestPage } from "./Utils/TwoFactorAuthenticationTestPage"

jest.unmock("react-relay")
HTMLCanvasElement.prototype.getContext = jest.fn()

const setupTestEnv = () => {
  return createTestEnv({
    TestPage: TwoFactorAuthenticationTestPage,
    Component: (props: TwoFactorAuthenticationQueryResponse) => (
      <TwoFactorAuthenticationRefetchContainer {...props} />
    ),
    query: graphql`
      query TwoFactorAuthenticationTestQuery {
        me {
          ...TwoFactorAuthentication_me
        }
      }
    `,
    defaultMutationResults: {
      createBackupSecondFactors: {},
      createSmsSecondFactor: {},
      updateSmsSecondFactor: {},
      createAppSecondFactor: {},
      updateAppSecondFactor: {},
      deliverSecondFactor: {},
      enableSecondFactor: {},
      disableSecondFactor: {},
    },
    defaultData: {
      me: {
        hasSecondFactorEnabled: false,
        appSecondFactors: [],
        smsSecondFactors: [],
        backupSecondFactors: [],
      },
    },
  })
}

describe("TwoFactorAuthentication ", () => {
  it("shows current 2FA enrollment status", async () => {
    const env = setupTestEnv()
    const page = await env.buildPage()

    expect(page.text()).toContain("Two-factor Authentication")
    expect(page.text()).toContain("Set up")
  })

  describe("AppSecondFactor", () => {
    it("prompts to setup if not enabled", async () => {
      const env = setupTestEnv()
      const page = await env.buildPage()

      expect(page.appSetupButton.exists).toBeTruthy
    })

    it("creates an enabled App Authenticator 2FA factor", async () => {
      const env = setupTestEnv()
      const page = await env.buildPage()

      env.mutations.useResultsOnce(CreateAppSecondFactorMutationSuccessResponse)
      env.mutations.useResultsOnce(UpdateAppSecondFactorMutationSuccessResponse)
      env.mutations.useResultsOnce(EnableAppSecondFactorMutationSuccessResponse)

      await page.clickAppSetupButton()
    })

    it("renders error upon failure to enable app factor", async done => {
      const env = setupTestEnv()
      const page = await env.buildPage()

      env.mutations.useResultsOnce(CreateAppSecondFactorMutationSuccessResponse)
      env.mutations.useResultsOnce(UpdateAppSecondFactorMutationSuccessResponse)
      env.mutations.useResultsOnce(EnableAppSecondFactorMutationErrorResponse)

      await page.clickAppSetupButton()
      await page.enterPassword('foo')

      setTimeout(() => {
        const modal = page.find("AppSecondFactor").find("Modal").filterWhere(modal => {
          // console.log(modal.text())
          return modal.text().includes("Turn on")
        })
        expect(modal.text()).toContain("Unable to enable factor.")
        done()
      })
    })
  })

  describe("SmsSecondFactor", () => {
    it("prompts to setup if not enabled", async () => {
      const env = setupTestEnv()
      const page = await env.buildPage()

      expect(page.smsSetupButton.exists).toBeTruthy
    })

    it("creates an enabled SMS 2FA factor", async () => {
      const env = setupTestEnv()
      const page = await env.buildPage()

      env.mutations.useResultsOnce(CreateSmsSecondFactorMutationSuccessResponse)
      env.mutations.useResultsOnce(
        DeliverSmsSecondFactorMutationSuccessResponse
      )
      env.mutations.useResultsOnce(UpdateSmsSecondFactorMutationSuccessResponse)
      env.mutations.useResultsOnce(EnableSmsSecondFactorMutationSuccessResponse)

      await page.clickSmsSetupButton()
    })

    it("renders error upon failure to enable SMS factor", async done => {
      const env = setupTestEnv()
      const page = await env.buildPage()

      env.mutations.useResultsOnce(CreateSmsSecondFactorMutationSuccessResponse)
      env.mutations.useResultsOnce(
        DeliverSmsSecondFactorMutationSuccessResponse
      )
      env.mutations.useResultsOnce(UpdateSmsSecondFactorMutationSuccessResponse)
      env.mutations.useResultsOnce(EnableSmsSecondFactorMutationInvalidResponse)

      await page.clickSmsSetupButton()

      setTimeout(() => {
        const modal = page.smsModal
        expect(modal.text()).toContain("Unable to enable factor.")
        done()
      })
    })
  })

  describe("BackupSecondFactor", () => {
    it("prompts to setup if no codes are available", async () => {
      const env = setupTestEnv()
      const page = await env.buildPage({
        mockData: AppEnabledWithoutBackupCodesQueryResponse,
      })

      expect(page.backupSetupButton.exists).toBeTruthy
    })

    it("creates backup codes and displays codes in a modal", async done => {
      const env = setupTestEnv()
      const page = await env.buildPage({
        mockData: AppEnabledWithoutBackupCodesQueryResponse,
      })

      expect(page.backupSetupButton.exists).toBeTruthy

      env.mutations.useResultsOnce(
        CreateBackupSecondFactorsMutationSuccessResponse
      )
      env.mockQuery.mockImplementation(
        createMockFetchQuery({
          mockData: AppEnabledWithBackupCodesQueryResponse,
        })
      )

      await page.clickBackupSetupButton()

      setTimeout(() => {
        const modalText = page.backupModal.text()

        BackupSecondFactors.forEach(factor => {
          expect(modalText).toContain(factor.code)
        })

        done()
      })
    })

    it("shows current backup codes in a modal", async done => {
      const env = setupTestEnv()
      const page = await env.buildPage({
        mockData: AppEnabledWithBackupCodesQueryResponse,
      })

      expect(page.find("BackupSecondFactor").text()).toContain("10 remaining")

      await page.clickBackupShowButton()

      setTimeout(() => {
        const modalText = page.backupModal.text()

        BackupSecondFactors.forEach(factor => {
          expect(modalText).toContain(factor.code)
        })

        done()
      })
    })

    it("regenerates backup codes and displays codes in a modal", async done => {
      const env = setupTestEnv()
      const page = await env.buildPage({
        mockData: AppEnabledWithBackupCodesQueryResponse,
      })

      expect(page.backupRegenerateButton.exists).toBeTruthy

      env.mutations.useResultsOnce(
        CreateBackupSecondFactorsMutationSuccessResponse
      )

      await page.clickBackupRegenerateButton()

      setTimeout(() => {
        const modalText = page.backupModal.text()

        BackupSecondFactors.forEach(factor => {
          expect(modalText).toContain(factor.code)
        })

        done()
      })
    })
  })
})
