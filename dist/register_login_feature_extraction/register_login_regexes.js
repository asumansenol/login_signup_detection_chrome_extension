// This file contains regular expression patterns for identifying signals particular to login, registration, and non-registration&login sites.

/**
 * @param {string[]} vocabs
 * @returns {string}
 */
function concatRegexStr(vocabs) {
  let regexSource = '(';
  regexSource += vocabs.join('|');
  return regexSource.slice(0, -1) + ')';
}

/**
 * @param {string} source
 * @returns {RegExp}
 */
function createRegexpFromSrc(source) {
  return new RegExp(source, 'i');
}

/**
 * @param {string} source
 * @returns {RegExp}
 */
function createExactMatchRegexpFromSrc(source) {
  return new RegExp(`\\b(${source})\\b`, 'i');
}

/**
 * @param {string} source1
 * @param {string} source2
 * @returns {RegExp}
 */
function createRegexInclucingTwoSrc(source1, source2) {
  return new RegExp(`(?=.*${source1})(?=.*${source2}).*`, 'i');
}

/**
 * A list of patterns for identifying username fields.
 */
const usernameRegexPattern = createRegexpFromSrc(concatRegexStr(usernameVocabs));

/**
 * A list of patterns for identifying password fields based on element properties.
 */
const passwordAttrRegexPattern = createRegexpFromSrc(concatRegexStr(passwordAttrVocabs));

/**
 * Login action RegExp pattern.
 */
const loginActionRegexPattern = createRegexpFromSrc(concatRegexStr(loginActionVocabs));

/**
 * Multiple translations of the RegExp login pattern.
 */
const loginRegexPattern = createRegexpFromSrc(concatRegexStr(loginVocabs));

/**
 * Password regexp pattern with many translations.
 */
const passwordRegexPattern = createRegexpFromSrc(concatRegexStr(passwordVocabs));

/**
 * RegExp pattern for "forgotten password form/element" with multiple translations.
 */
const forgotRegexPattern = createRegexpFromSrc(concatRegexStr(forgotVocabs));

/**
 * RegExp pattern with many translations for "forgot password form/element"
 * actions.
 */
const forgotLinkRegexPattern = createRegexpFromSrc(concatRegexStr(forgotActionVocabs));

/**
 * RegExp pattern with multiple translations for register.
 */
const registeRegexPattern = createRegexpFromSrc(concatRegexStr(registerVocabs));

/**
 * RegExp pattern for register actions.
 */
const registerActionRegex =
  createRegexpFromSrc(concatRegexStr(registerActionVocabs));

/**
 * Remember action RegExp pattern.
 */
const rememberMeActionRegex =
  createRegexpFromSrc(concatRegexStr(rememberMeActionVocabs));

/**
 * RegExp pattern with different "remember me" translations.
 */
const rememberMeRegexPattern = createRegexpFromSrc(concatRegexStr(rememberMeVocabs));

/**
 * RegExp pattern with various variations for 'newsletter'.
 */
const newsletterRegexPattern = createRegexpFromSrc(concatRegexStr(newsletterVocabs));

/**
 * RegExp pattern for 'new'.
 */
const newRegexPattern = createRegexpFromSrc(concatRegexStr(newVocabs));

/**
 * RegExp pattern for "confirm".
 */
const confirmRegexPattern = createRegexpFromSrc(concatRegexStr(confirmVocabs));

/**
 * RegExp pattern for "current".
 */
const currentRegexPattern =
  createRegexpFromSrc(concatRegexStr(currentVocabs));

/**
 * RegExp pattern for "next" and "continue" with keywords.
 */
const nextOrContinueRegexPattern = createRegexpFromSrc(concatRegexStr(nextVocabs));

/**
 * RegExp "password" pattern (combined).
 */
const passwordCombinedRegexPattern =
  createRegexpFromSrc(concatRegexStr(passwordVocabs.concat(passwordAttrVocabs)));

/**
 * RegExp "password" pattern (combined) for exact match only.
 */
const passwordExactCombinedRegexPattern =
  createExactMatchRegexpFromSrc(concatRegexStr(passwordVocabs.concat(passwordAttrVocabs)));

/**
 * RegExp "forgot" pattern (combined).
 */
const forgotExactCombinedRegexPattern =
  createExactMatchRegexpFromSrc(concatRegexStr(forgotVocabs.concat(forgotActionVocabs)));

/**
 * RegExp "register" pattern (combined).
 */
const registerCombinedRegexPattern =
  createRegexpFromSrc(concatRegexStr(registerVocabs.concat(registerActionVocabs)));

/**
 * RegExp "register" pattern (combined) for exact match.
 */
const registerExactCombinedRegexPattern =
  createExactMatchRegexpFromSrc(concatRegexStr(registerVocabs.concat(registerActionVocabs)));

/**
 * RegExp "login" pattern (combined).
 */
const loginCombinedRegexPattern =
  createRegexpFromSrc(concatRegexStr(loginVocabs.concat(loginActionVocabs)));

/**
 * RegExp "login" action pattern for exact match.
 */
const loginExactAttrRegexPattern =
  createExactMatchRegexpFromSrc(concatRegexStr(loginActionVocabs));

/**
 * RegExp "register" action pattern for exact match.
 */
const registerExactActionRegexPattern =
  createExactMatchRegexpFromSrc(concatRegexStr(registerActionVocabs));

/**
 * RegExp "login" pattern (combined) for exact match.
 */
const loginExactCombinedRegexPattern =
  createExactMatchRegexpFromSrc(concatRegexStr(loginVocabs.concat(loginActionVocabs)));

const haveVocabsSource = concatRegexStr(haveVocabs);
const notHaveVocabsSource = concatRegexStr(notHaveVocabs);
const accountVocabsSource = concatRegexStr(accountVocabs);

/**
 * RegExp pattern to detect "have already (an account)" matches.
 */
const haveAlreadyRegex =
  createRegexInclucingTwoSrc(haveVocabsSource, accountVocabsSource);

/**
 * RegExp pattern to detect "don't have (an account)" matches.
 */
const notHaveRegex =
  createRegexInclucingTwoSrc(notHaveVocabsSource, accountVocabsSource);