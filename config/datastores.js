module.exports.datastores = {

  /*default: {
    adapter: 'sails-postgresql',
    host: '192.168.252.222',
    port: '54320',
    user: 'postgres',
    password: 'abc123',
    database: 'apirest'
  },*/

  default: {
    adapter: 'sails-postgresql',
    host: 'ec2-174-129-253-157.compute-1.amazonaws.com',
    port: '5432',
    ssl: true,
    user: 'kqucxqlsonfgwl',
    password: '17525bd8afcac7f0760f81d95999b17d9ee93f4b2128ebc4b019057f9f312143',
    database: 'dfbi70qopbl645'
  },
};