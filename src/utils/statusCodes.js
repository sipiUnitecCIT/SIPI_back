// STATUS 1XX
const INFORMATIVE_STATUS = {
  CONTINUE: {
    CODE: 100,
    MESSAGE: "Continue",
  },

  SWITCHING_PROTOCOLS: {
    CODE: 101,
    MESSAGE: "Switching Protocols",
  },

  PROCESSING: {
    CODE: 102,
    MESSAGE: "Processing",
  },

  EARLY_HINTS: {
    CODE: 103,
    MESSAGE: "Early Hints",
  },
}

// STATUS 2XX
const SUCCESSFUL_STATUS = {
  OK: {
    CODE: 200,
    MESSAGE: "OK",
  },

  CREATED: {
    CODE: 201,
    MESSAGE: "Created",
  },

  ACCEPTED: {
    CODE: 202,
    MESSAGE: "Accepted",
  },

  NON_AUTHORITATIVE_INFORMATION: {
    CODE: 203,
    MESSAGE: "Non-Authoritative Information",
  },

  NO_CONTENT: {
    CODE: 204,
    MESSAGE: "No Content",
  },

  RESET_CONTENT: {
    CODE: 205,
    MESSAGE: "Reset Content",
  },

  PARTIAL_CONTENT: {
    CODE: 206,
    MESSAGE: "Partial Content",
  },

  MULTI_STATUS: {
    CODE: 207,
    MESSAGE: "Multi-Status",
  },

  ALREADY_REPORTED: {
    CODE: 208,
    MESSAGE: "Already Reported",
  },

  IM_USED: {
    CODE: 226,
    MESSAGE: "IM Used",
  },
}

// STATUS 3XX
const REDIRECTION_STATUS = {
  MULTIPLE_CHOICES: {
    CODE: 300,
    MESSAGE: "Multiple Choices",
  },

  MOVED_PERMANENTLY: {
    CODE: 301,
    MESSAGE: "Moved Permanently",
  },

  FOUND: {
    CODE: 302,
    MESSAGE: "Found",
  },

  SEE_OTHER: {
    CODE: 303,
    MESSAGE: "See Other",
  },

  NOT_MODIFIED: {
    CODE: 304,
    MESSAGE: "Not Modified",
  },

  USE_PROXY: {
    CODE: 305,
    MESSAGE: "Use Proxy",
  },

  TEMPORARY_REDIRECT: {
    CODE: 307,
    MESSAGE: "Temporary Redirect",
  },

  PERMANENT_REDIRECT: {
    CODE: 308,
    MESSAGE: "Permanent Redirect",
  },
}

module.exports = { INFORMATIVE_STATUS, SUCCESSFUL_STATUS, REDIRECTION_STATUS }