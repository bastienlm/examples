import gql from "graphql-tag";
import StorefrontContentType from "front-commerce-contentful/server/core/domain/StorefrontContentType";

const formatContentfulData = (contentfulData) => {
  return {
    title: contentfulData.title,
  };
};

export default class BlockPush extends StorefrontContentType {
  constructor() {
    super("blockPush", "BlockPush", formatContentfulData);
  }

  /**
   * @return {import("graphql/language/ast").DocumentNode} contentfulFragment
   */
  get contentfulFragment() {
    return gql`
      fragment BlockPushFragment on BlockPush {
        ${this.sys}
        title
      }
    `;
  }
}
