import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const SwiftUI = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <div>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        const img = state.source.attachment[post.featured_media].source_url;

        return (
          <div key={item.id}>
            <img src={img} width="100%" />
            <Link link={post.link}>{post.title.rendered}</Link>
            {post.excerpt && post.excerpt.rendered}
          </div>
        );
      })}
    </div>
  );
};

export default connect(SwiftUI);
