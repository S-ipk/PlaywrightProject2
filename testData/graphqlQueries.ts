export const languagesQuery = `
  query {
    languages {
      code
      name
      native
      rtl
    }
  }
`;

export const languagesInvalidQuery  = `
query {
    languages {
      code
      name
      native
      Invalid
    }
  }
`;