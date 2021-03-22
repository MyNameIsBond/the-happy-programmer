export const getPostAuthor = (state, post) => {
  const author = state.source.author[post.author];
  return {
    id: author.id,
    name: author.name,
    link: author.link,
    description: author.description,
    avatar: author.avatar_urls["96"],
  };
};

export const getSrcSet = (media) => {
  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;
  return srcset;
};

export const getMediaAttributes = (state, id) => {
  const media = state.source.attachment[id];
  if (!media) return {};

  const srcSet = getSrcSet(media);

  return {
    id,
    alt: media.title.rendered,
    src: media.source_url,
    srcSet,
  };
};

export const dataPost = (state, post) => {
  return {
    id: post.id,
    date: post.date,
    title: post.title && post.title.rendered,
    link: post.link,
    content: post.content && post.content.rendered,
    excerpt: post.excerpt && post.excerpt.rendered,
    author: getPostAuthor(state, post),
    img: getMediaAttributes(state, post.featured_media),
  };
};
