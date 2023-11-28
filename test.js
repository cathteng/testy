const Sentry = require("@sentry/node");

Sentry.init({
  dsn: 'https://b070dad593840b171d307dbb38de729f@o4505365730885632.ingest.sentry.io/4506305809088512',
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
      yellow();
    } catch (e) {
      Sentry.captureException(e);
    } finally {
      transaction.finish();
    }
  }, 99);