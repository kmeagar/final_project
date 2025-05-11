export type FilterLocationType = {
  id?: string | { $in: string[] }; // allow filtering by ID or array of IDs
};

export type FilterWishlistType = {
  on_wishlist: {
    $in: string[];
  };
};
