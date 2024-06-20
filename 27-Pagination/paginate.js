const paginate = (followers) => {
  const itemsPerPage = 9;

  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const startIndex = itemsPerPage * index;

    return followers.slice(startIndex, startIndex + itemsPerPage);
  });

  return newFollowers;
};

export default paginate;
