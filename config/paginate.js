const mongoosePaginate = require('mongoose-paginate-v2');

mongoosePaginate.paginate.options = {
  limit: 20,
  populate: 'genres offers.buy.provider offers.rent.provider offers.stream.provider',
  lean: true,
  leadWithId: true,
  customLabels: {
    totalDocs: 'count',
    docs: 'results',
    limit: 'limit',
    page: 'page',
    nextPage: 'next',
    prevPage: 'previous',
    totalPages: 'total_pages',
    pagingCounter: 'paging_counter',
  },
};

module.exports = { paginate: mongoosePaginate };
