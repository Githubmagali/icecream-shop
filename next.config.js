module.exports = {
    async redirects() {
      return [
        {
          source: '/iceCream/:id',
          destination: '/[id]/page',
          permanent: true,
        },
      ];
    },
  };