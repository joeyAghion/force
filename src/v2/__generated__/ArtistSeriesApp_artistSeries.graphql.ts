/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtistSeriesApp_artistSeries = {
    readonly railArtist: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"ArtistSeriesRail_artist">;
    } | null> | null;
    readonly internalID: string;
    readonly slug: string;
    readonly " $fragmentRefs": FragmentRefs<"ArtistSeriesMeta_artistSeries" | "ArtistSeriesHeader_artistSeries" | "ArtistSeriesArtworksFilter_artistSeries">;
    readonly " $refType": "ArtistSeriesApp_artistSeries";
};
export type ArtistSeriesApp_artistSeries$data = ArtistSeriesApp_artistSeries;
export type ArtistSeriesApp_artistSeries$key = {
    readonly " $data"?: ArtistSeriesApp_artistSeries$data;
    readonly " $fragmentRefs": FragmentRefs<"ArtistSeriesApp_artistSeries">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "acquireable",
      "type": "Boolean"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "aggregations",
      "type": "[ArtworkAggregation]"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "atAuction",
      "type": "Boolean"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "attributionClass",
      "type": "[String]"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "colors",
      "type": "[String]"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "forSale",
      "type": "Boolean"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "height",
      "type": "String"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "inquireableOnly",
      "type": "Boolean"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "keyword",
      "type": "String"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "majorPeriods",
      "type": "[String]"
    },
    {
      "defaultValue": "*",
      "kind": "LocalArgument",
      "name": "medium",
      "type": "String"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "offerable",
      "type": "Boolean"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "page",
      "type": "Int"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "partnerID",
      "type": "ID"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "priceRange",
      "type": "String"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "sizes",
      "type": "[ArtworkSizes]"
    },
    {
      "defaultValue": "-partner_updated_at",
      "kind": "LocalArgument",
      "name": "sort",
      "type": "String"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "width",
      "type": "String"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "locationCities",
      "type": "[String]"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "additionalGeneIDs",
      "type": "[String]"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistSeriesApp_artistSeries",
  "selections": [
    {
      "alias": "railArtist",
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 1
        }
      ],
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artists",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtistSeriesRail_artist"
        }
      ],
      "storageKey": "artists(size:1)"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistSeriesMeta_artistSeries"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistSeriesHeader_artistSeries"
    },
    {
      "args": [
        {
          "kind": "Variable",
          "name": "acquireable",
          "variableName": "acquireable"
        },
        {
          "kind": "Variable",
          "name": "additionalGeneIDs",
          "variableName": "additionalGeneIDs"
        },
        {
          "kind": "Variable",
          "name": "aggregations",
          "variableName": "aggregations"
        },
        {
          "kind": "Variable",
          "name": "atAuction",
          "variableName": "atAuction"
        },
        {
          "kind": "Variable",
          "name": "attributionClass",
          "variableName": "attributionClass"
        },
        {
          "kind": "Variable",
          "name": "colors",
          "variableName": "colors"
        },
        {
          "kind": "Variable",
          "name": "forSale",
          "variableName": "forSale"
        },
        {
          "kind": "Variable",
          "name": "height",
          "variableName": "height"
        },
        {
          "kind": "Variable",
          "name": "inquireableOnly",
          "variableName": "inquireableOnly"
        },
        {
          "kind": "Variable",
          "name": "keyword",
          "variableName": "keyword"
        },
        {
          "kind": "Variable",
          "name": "locationCities",
          "variableName": "locationCities"
        },
        {
          "kind": "Variable",
          "name": "majorPeriods",
          "variableName": "majorPeriods"
        },
        {
          "kind": "Variable",
          "name": "medium",
          "variableName": "medium"
        },
        {
          "kind": "Variable",
          "name": "offerable",
          "variableName": "offerable"
        },
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        },
        {
          "kind": "Variable",
          "name": "partnerID",
          "variableName": "partnerID"
        },
        {
          "kind": "Variable",
          "name": "priceRange",
          "variableName": "priceRange"
        },
        {
          "kind": "Variable",
          "name": "sizes",
          "variableName": "sizes"
        },
        {
          "kind": "Variable",
          "name": "sort",
          "variableName": "sort"
        },
        {
          "kind": "Variable",
          "name": "width",
          "variableName": "width"
        }
      ],
      "kind": "FragmentSpread",
      "name": "ArtistSeriesArtworksFilter_artistSeries"
    }
  ],
  "type": "ArtistSeries"
};
(node as any).hash = '43bf7f8648e51e6803c1e477fdf94662';
export default node;
