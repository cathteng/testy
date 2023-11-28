const Sentry = require("@sentry/node");

Sentry.init({
  dsn: 'https://47a5b22f68b02f5fc80a0f5e10b092a9@o4505647181266944.ingest.sentry.io/4506300503425024',
  // Performance Monitoring
  tracesSampleRate: 1.0,
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
    op: "test",
    name: "My First Test Transaction",
  });
  
  setTimeout(() => {
    try {
      hello();
    } catch (e) {
      Sentry.captureException(e);
    } finally {
      transaction.finish();
    }
  }, 99);