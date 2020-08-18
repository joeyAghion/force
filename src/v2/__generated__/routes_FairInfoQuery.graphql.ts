/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type routes_FairInfoQueryVariables = {
    slug: string;
};
export type routes_FairInfoQueryResponse = {
    readonly fair: {
        readonly " $fragmentRefs": FragmentRefs<"FairInfo_fair">;
    } | null;
};
export type routes_FairInfoQuery = {
    readonly response: routes_FairInfoQueryResponse;
    readonly variables: routes_FairInfoQueryVariables;
};



/*
query routes_FairInfoQuery(
  $slug: String!
) {
  fair(id: $slug) {
    ...FairInfo_fair
    id
  }
}

fragment FairInfo_fair on Fair {
  about
  name
  slug
  tagline
  location {
    summary
    id
  }
  ticketsLink
  hours
  links
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug",
    "type": "String!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "routes_FairInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FairInfo_fair"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "routes_FairInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "about",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tagline",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "summary",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ticketsLink",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hours",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "links",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "routes_FairInfoQuery",
    "operationKind": "query",
    "text": "query routes_FairInfoQuery(\n  $slug: String!\n) {\n  fair(id: $slug) {\n    ...FairInfo_fair\n    id\n  }\n}\n\nfragment FairInfo_fair on Fair {\n  about\n  name\n  slug\n  tagline\n  location {\n    summary\n    id\n  }\n  ticketsLink\n  hours\n  links\n}\n"
  }
};
})();
(node as any).hash = 'd0fdf69923e4836dc6a43fcce92b1319';
export default node;
