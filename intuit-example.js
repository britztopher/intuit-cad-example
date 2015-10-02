

var authCredentials ={
  issuerId: process.env.INTUIT_ISSUER_ID || 'nothing',
  consumerKey:process.env.INTUIT_CONSUMER_KEY || 'CONSUMERKEY',
  consumerSecret: process.env.INTUIT_CONSUMER_SECRET || 'CONSUMER_SECRET',
  privateKeyPath: '/Users/chrisbritz/Documents/projects/compendium-advisor/comptest.key'
};

var options = {
  logLevel: 'debug'
}
var IntuitCad = require('intuit-cad');

var client = new IntuitCad(authCredentials, options);
//client.institutions()
//  .then(function(institutions){
//    console.log('institutions: ', institutions);
//  },
//  function(reason){
//    console.log('message: ', reason);
//  });

//client.deleteCustomer()
//  .then(function(wasDeleted){
//    console.log('customer was deleted: ', wasDeleted);
//  },
//  function(reason){
//    console.log('could not delete customer because: ', reason);
//  });

//
//client.discoverAndAddAccounts('direct', 'blah', 100000)
//  .then(function(accounts){
//    console.log('DISCOVERED ACCOUNTS: ', accounts);
//  },
//  function(reason){
//    console.log('reason for failure was because: ', reason);
//  });

//client.getAccount(1000000001)
//  .then(function(accountDetail){
//    console.log('GET CUSTOMER ACCOUNT DETAIL: ', accountDetail);
//  },
//  function(reason){
//    console.log('could not get account because of: ', reason);
//  });
//
//
//
//client.getCustomerAccounts()
//  .then(function(accounts){
//
//    console.log('account: ', accounts);
//
//    client.deleteAccount(accounts.account[0].accountId)
//      .then(function(response){
//        console.log('deleted Account: ', response);
//      })
//  });

client.getCustomerAccounts()
  .then(function(accounts){
    return client.deleteAccount(accounts.accounts[0].accountId)
  })
  .then(function(response){
    console.log('done delete: ', response);
  },
  function(reason){
    console.log('delete failure reason: ', reason);
  });

//
//client.getLoginAccounts(1284060126)
//  .then(function(loginAccounts){
//    console.log('login accounts: ', loginAccounts);
//  },
//  function(reason){
//    console.log('could not get login accounts because of: ', reason);
//  });
//client.updateInstitutionLogin(1284060126, 'direct', 'newpassword')
//  .then(function(wasSuccess){
//    console.log('changed user passwords: ', wasSuccess);
//  },
//  function(reason){
//    console.log('could not update login accounts because of: ', reason);
//  });
//
//client.getAccountTransactions(400109423068, '2015-07-01', '2015-07-29')
//  .then(function(transactions){
//    console.log('ACCOUNT TRANSACTIONS: ');
//  },
//  function(reason){
//    console.log('could not get transactions because of: ', reason);
//  });


//var client = new Client(authCredentials);
//client.institutions();
//var auth = intuitAuth.authenticate(function(err, authInfo){
//  console.log('authInfo in exaple: ', authInfo);
//intuitAuth.institutions();
//})


