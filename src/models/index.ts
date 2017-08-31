 import * as Sequelize from 'sequelize';

if (!global.hasOwnProperty('db')) {
	var sequelize = null;

  if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize('postgres://corey@localhost:5432/project3')
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    models: {
    	Entry: sequelize.import("./entry"),
    	Journal: sequelize.import('./journal'),
    	User: sequelize.import('./user')
    }
  }
  global.db.models.Entry.belongsTo(global.db.models.Journal);
  global.db.models.Journal.hasMany(global.db.models.Entry);

  global.db.models.Journal.belongsTo(global.db.models.User);
  global.db.models.User.hasMany(global.db.models.Journal);
}

export { global.db }