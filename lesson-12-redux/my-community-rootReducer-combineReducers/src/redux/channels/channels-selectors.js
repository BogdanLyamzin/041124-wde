export const selectAllChannels = (store) => store.channels;

export const selectFavoriteChannels = (store) =>
  store.channels.filter((item) => item.favorite);

export const selectChannelsCount = store => store.channels.length;
