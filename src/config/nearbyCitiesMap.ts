export const nearbyCitiesMap: Record<string, Array<{ name: string; slug: string }>> = {
  'boca-raton': [
    { name: 'Deerfield Beach', slug: 'deerfield-beach' },
    { name: 'Delray Beach', slug: 'delray-beach' },
    { name: 'Highland Beach', slug: 'highland-beach' },
    { name: 'Boynton Beach', slug: 'boynton-beach' },
  ],
  'deerfield-beach': [
    { name: 'Boca Raton', slug: 'boca-raton' },
    { name: 'Pompano Beach', slug: 'pompano-beach' },
    { name: 'Coconut Creek', slug: 'coconut-creek' },
    { name: 'Lighthouse Point', slug: 'lighthouse-point' },
  ],
  'pompano-beach': [
    { name: 'Deerfield Beach', slug: 'deerfield-beach' },
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
    { name: 'Lighthouse Point', slug: 'lighthouse-point' },
    { name: 'Oakland Park', slug: 'oakland-park' },
  ],
  'lighthouse-point': [
    { name: 'Deerfield Beach', slug: 'deerfield-beach' },
    { name: 'Pompano Beach', slug: 'pompano-beach' },
    { name: 'Boca Raton', slug: 'boca-raton' },
  ],
  'highland-beach': [
    { name: 'Boca Raton', slug: 'boca-raton' },
    { name: 'Delray Beach', slug: 'delray-beach' },
  ],
  'delray-beach': [
    { name: 'Boca Raton', slug: 'boca-raton' },
    { name: 'Highland Beach', slug: 'highland-beach' },
    { name: 'Boynton Beach', slug: 'boynton-beach' },
  ],
  'boynton-beach': [
    { name: 'Delray Beach', slug: 'delray-beach' },
    { name: 'Lake Worth Beach', slug: 'lake-worth-beach' },
    { name: 'Boca Raton', slug: 'boca-raton' },
  ],
  'lake-worth-beach': [
    { name: 'Boynton Beach', slug: 'boynton-beach' },
    { name: 'West Palm Beach', slug: 'west-palm-beach' },
  ],
  'west-palm-beach': [
    { name: 'Lake Worth Beach', slug: 'lake-worth-beach' },
    { name: 'Boynton Beach', slug: 'boynton-beach' },
  ],
  'coral-springs': [
    { name: 'Parkland', slug: 'parkland' },
    { name: 'Coconut Creek', slug: 'coconut-creek' },
    { name: 'Margate', slug: 'margate' },
    { name: 'Tamarac', slug: 'tamarac' },
  ],
  'coconut-creek': [
    { name: 'Coral Springs', slug: 'coral-springs' },
    { name: 'Margate', slug: 'margate' },
    { name: 'Deerfield Beach', slug: 'deerfield-beach' },
  ],
  'parkland': [
    { name: 'Coral Springs', slug: 'coral-springs' },
    { name: 'Boca Raton', slug: 'boca-raton' },
  ],
  'margate': [
    { name: 'Coral Springs', slug: 'coral-springs' },
    { name: 'Coconut Creek', slug: 'coconut-creek' },
    { name: 'Tamarac', slug: 'tamarac' },
  ],
  'tamarac': [
    { name: 'Coral Springs', slug: 'coral-springs' },
    { name: 'Margate', slug: 'margate' },
    { name: 'Sunrise', slug: 'sunrise' },
  ],
  'fort-lauderdale': [
    { name: 'Pompano Beach', slug: 'pompano-beach' },
    { name: 'Wilton Manors', slug: 'wilton-manors' },
    { name: 'Oakland Park', slug: 'oakland-park' },
    { name: 'Hollywood', slug: 'hollywood' },
  ],
  'wilton-manors': [
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
    { name: 'Oakland Park', slug: 'oakland-park' },
  ],
  'oakland-park': [
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
    { name: 'Pompano Beach', slug: 'pompano-beach' },
    { name: 'Wilton Manors', slug: 'wilton-manors' },
  ],
  'sunrise': [
    { name: 'Plantation', slug: 'plantation' },
    { name: 'Tamarac', slug: 'tamarac' },
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
  ],
  'plantation': [
    { name: 'Sunrise', slug: 'sunrise' },
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
    { name: 'Hollywood', slug: 'hollywood' },
  ],
  'hollywood': [
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
    { name: 'Plantation', slug: 'plantation' },
  ],
};
