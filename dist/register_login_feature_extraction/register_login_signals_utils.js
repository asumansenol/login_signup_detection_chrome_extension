/**
 * This file contains functions to verify the functionality of register logins.
 */

const MAX_CHAR_COUNT = 100;

/**
 * Returns the count of times a string or regex appears in another string.
 * @param {RegExp} regex
 * @param {string} text
 * @return {number}
 */
function countRegex(regex, text) {
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

/**
 * Verify whether the elements' text content and attributes match the provided regexes.
 * @param {Element} element
 * @param {RegExp[]} attrRegexes
 * @param {RegExp[]} contentRegexes
 * @return {boolean}
 */
function attrsAndTextMatch(element, attrRegexes, contentRegexes) {
  const attrMatch = hasMatchOnAttrs(element, attrRegexes);
  const contentMatch = hasTextContentMatch(element, contentRegexes);
  return attrMatch || contentMatch;
}

/**
 * For the specified password elements, confirm that a label, placeholder, or aria-label value matches the provided regex.
 * @param {Element} element
 * @param {RegExp} regex
 * @return {boolean}
 */

function hasMatchOnLabelAriaLabelPlaceholder(
  element, regex) {
  const hasLabel = hasPasswordLabel(element, regex);
  const hasMatchInAttrs = hasMatchOnAttrs(element, [regex]);
  const isLabelClose = hasLabelCloseToPwd(element, regex);

  return (hasLabel || hasMatchInAttrs || isLabelClose);
}

/**
 * Verifies the login and email fields are close to a next or continue button on the page or form.  Distance between two elements was calculated using spatial distance.
 * @param {Element[]} emails
 * @param {Element[]} usernames
 * @param {Element} button
 * @return {boolean}
 */
function hasButtonCloseToUsernameOrEmail(emails, usernames, button) {
  const emailAndUsernames = emails.concat(usernames);
  return hasButtonCloseToInputs(emailAndUsernames, button);
}

/**
 * Verify whether the text has matched the regex.
 * @param {RegExp} regex
 * @param {string} checkStr
 * @return {boolean}
 */
function hasMatchOnText(regex, checkStr) {
  return regex.test(checkStr);
}

/**
 * Returns the number of times the specified element's attribute values match the provided regex.
 * @param {RegExp} regex
 * @param {Element} element
 * @return {number}
 */

function countMatchInAttrs(
  regex, element) {
  const attributes = Array.from(element.attributes).map((a) => a.name);
  let count = 0;
  for (const attribute of attributes) {
    const attr = element.getAttribute(attribute);
    if (!attr) continue;
    if (Array.isArray(attr)) {
      for (const attrValue of attr) {
        count += countRegex(regex, attrValue);
      }
    } else {
      count += countRegex(regex, attr);
    }
  }
  return count;
}

/**
 * Verify that the attributes (id, className, value, name) of the objects match the given regex.
 * @param {Element} element
 * @param {RegExp} regex
 * @return {boolean}
 */
function hasMatchInElementAttrs(element, regex) {
  return element &&
    (regex.test(element.id) || regex.test(element.className) ||
      regex.test(element.getAttribute('value') || '') ||
      regex.test(element.getAttribute('name') || ''));
}

/**
 * Determines whether an input field is a username field, look for the word "username" in its properties.
 * @param {Element} element
 * @param {RegExp} expr
 * @return {boolean}
 */
function isUsernameField(element, expr) {
  // @ts-ignore
  const ac = (element).autocomplete || undefined;
  return ac === 'username' || hasMatchInElementAttrs(element, expr) || hasLabelMathcesWRegexPattern(element, expr);
}

/**
 * Returns the descendant elements using the selector.
 * @param {Element} element
 * @param {string} selector
 * @return {Element[]}
 */
function getElementDescendants(element, selector) {
  return Array.from(element.querySelectorAll(`body ${selector}:not(footer ${selector})`)).filter((el) => el);
}

/**
 * Get visible username fields on the page.
 * @param {Element} documentBody
 * @param {RegExp} usernameRegexPattern
 * @return {Element[]} The visible username fields.
 */
function getVisibleUsernameFields(documentBody, usernameRegexPattern) {
  const inputFields = getElementDescendants(documentBody, 'input[type=email],input[type=text],input[type=""],input:not([type])');
  return inputFields.filter(input => (isUsernameField(input, usernameRegexPattern) && checkVisibilityForSignals(input)));
}

/**
 * @param {number} x
 * @return {number}
 */
function stretchedSigmoid(x) {
  return 1 / (1 + Math.exp(-(x - 300) / 100))
}

/**
 * Verifies if the specified element is near the username or email field.
 * @param {Element} element1
 * @param {Element} element2
 * @return {number}
 */
function isElementNearToAnother(element1, element2) {
  return 1 - stretchedSigmoid(euclidean(element1, element2));
}

/**
 * Returns the closest match for the provided element inside another element.
 * @param {Element} toElement
 * @param {Element|null} inElement
 * @param {string} selector
 * @return {Element|undefined}
 */
function closestElementWithinElementBySelector(toElement, inElement, selector) {
  if (inElement) {
    const elements = getElementDescendants(inElement, selector);
    if (elements.length) {
      // @ts-ignore
      const minDistEl = minC(elements, (element) => euclidean(element, toElement));
      return minDistEl;
    }
  }
  return undefined;
}

/**
 * Verifies that the label adjacent to the password field corresponds to the specified regex.
 * @param {Element} element
 * @param {RegExp} regex
 * @return {boolean}
 */
function closestLabelMatchesWRegexPattern(element, regex) {
  const previousElementSibling = element.previousElementSibling;
  if (previousElementSibling !== null && previousElementSibling.tagName === 'LABEL') {
    return regex.test(previousElementSibling.textContent || '');
  }

  const nextElementSibling = element.nextElementSibling;
  if (nextElementSibling !== null && nextElementSibling.tagName === 'LABEL') {
    return regex.test(nextElementSibling.textContent || '');
  }

  // @ts-ignore
  const closestLabelWithinForm = closestElementWithinElementBySelector(element, element.form, 'label');
  const matchStr = (closestLabelWithinForm !== undefined) ? closestLabelWithinForm.textContent : '';
  return hasMatchOnText(regex, matchStr || '');
}

/**
 * Verifies that the textContent of the provided elements matches with the regex patterns.
 * @param {Element} element
 * @param {any[]} regexes
 * @return {boolean}
 */
function hasTextContentMatch(element, regexes) {
  return regexes.every((regex) => hasMatchOnText(regex, element.textContent || ''));
}

/**
 * Verifies that the keyword is present in the element's labels.
 * @param {Element} element
 * @param {RegExp} regex
 * @return {boolean}
 */
function hasLabelMathcesWRegexPattern(element, regex) {
  // @ts-ignore
  const elementLabels = (element).labels;
  if (elementLabels !== null && elementLabels.length) {
    return regex.test(elementLabels[0].textContent || '');
  }
  // Control element.aria-labelledby
  const labelledByValue = element.getAttribute('aria-labelledby');
  if (labelledByValue !== null) {
    const labelledByElements = labelledByValue.split(' ').map(id => document.getElementById(id)).filter(el => el);
    if (labelledByElements.length === 1) {
      return regex.test(labelledByElements[0].textContent || '');
    } else if (labelledByElements.length > 1) {
      const minEl = minC(labelledByElements,(/** @type {Element} */ node) => euclidean(node, element));
      const matchStr = (minEl) ? minEl.textContent || '' : '';
      return regex.test(matchStr);
    }
  }

  const parent = element.parentElement;
  if (!parent) {
    return false;
  }
  // Verifies that the input is in a <td>, and if it is, make sure the containing <tr>'s textContent is correct.
  if (parent.tagName === 'TD' && parent.parentElement) {
    return regex.test(parent.parentElement.textContent || '');
  }

  // Verifies the input is in a <dd> and, if it is, look at the textContent of the <dt> that comes before it.
  if (parent.tagName === 'DD' &&
    // previousElementSibling can be null
    parent.previousElementSibling) {
    return regex.test(parent.previousElementSibling.textContent || '');
  }
  return false;
}

/**
 * Returns every email field that is displayed on the page.
 * @param {Element} documentBody
 * @return {Element[]}
 */
function geVisibleEmailFields(documentBody) {
  const emailFields = getElementDescendants(documentBody, 'input[type=email]');
  const inputElements = getElementDescendants(documentBody, 'input[type=text],input[type=""],input:not([type])');
  for (const input of inputElements) {
    if (countMatchInAttrs(/email/gi, input)) {
      emailFields.push(input);
    }
  }
  return emailFields;
}

/**
 * Verifies that the provided field is an email field.
 * @param {Element} element
 * @return {boolean}
 */
function isEmailField(element) {
  // @ts-ignore
  if ((element).type === 'email') {
    return true;
  }
  // @ts-ignore
  if ((element.type && element.type === 'text') && countMatchInAttrs(/email/gi, element)) {
    return true;
  }
  return false;
}

/**
 * Verifies that the field may contain personal data.
 * @param {HTMLInputElement} element
 * @return {boolean}
 */
function canFieldContainPersonalData(element) {
  return ['date', 'datetime-local', 'month', 'number', 'email', 'text', 'tel', 'week'].includes((element).type);
}

/**
 * Verifies that the label nearest to the pwd field matches the confirm keywords.
 * @param {Element} passwordElement
 * @param {RegExp} regex
 * @return {boolean}
 */
function hasLabelCloseToPwd(
  passwordElement, regex) {
  return closestLabelMatchesWRegexPattern(passwordElement, regex);
}

/**
 * Verifies that the labels of the passwords match with the provided regex pattern.
 * @param {Element} passwordElement
 * @param {RegExp} regex
 * @return {boolean}
 */
function hasPasswordLabel(
  passwordElement, regex) {
  return hasLabelMathcesWRegexPattern(passwordElement, regex);
}

/**
 * Verifies that the matches for the elements' HTML attributes.
 * @param {Element} element
 * @param {RegExp[]} regexes
 * @return {boolean}
 */
function hasMatchOnAttrs(element, regexes) {
  return regexes.every((regex) => countMatchInAttrs(regex, element));
}

/**
 * Verifies an element is in a form.
 * @param {Element} element
 * @return {boolean}
 */
function isInAForm(element) {
  // @ts-ignore
  try {
    for (const form of document.forms) {
      if (form.contains(element)) return true;
    }
  } catch (error) {
    return false;
  }
  return false;
}

/**
 * Returns all elements that are visible in the document's body using a selector.
 * @param {Element} documentBody
 * @param {string} selector
 * @return {Element[]}
 */
function getAllVisibleElements(documentBody, selector) {
  return getElementDescendants(documentBody, selector).filter((element) => checkVisibilityForSignals(element));
}

/**
 * Returns all of the document's visible header components.
 * @param {Element} documentBody
 * @return {Element[]}
 */
function getAllVisibleHeaders(documentBody) {
  const headerSelectors = 'H1,H2,H3,H4,H5';
  const headerElements = getAllVisibleElements(documentBody, headerSelectors);
  const visibleDivElements = getAllVisibleElements(documentBody,'div[class*=heading],div[class*=form-title],[role=heading]');
  const visibleLegendElements = getAllVisibleElements(documentBody, 'legend');
  headerElements.push(...visibleDivElements, ...visibleLegendElements);
  return headerElements;
}


/**
 * @param {Element} element
 * @param {RegExp} regex
 * @return {boolean}
 */
function textFilter(element, regex) {
  return (element.textContent != null &&
    element.textContent.length <= MAX_CHAR_COUNT && hasTextContentMatch(element, [regex]));
}

function checkVisibilityForSignals(element) {
  return checkElVisibilityForSignals(element);
}

/**
 * Verifies that div elements has regex pattern.
 * @param {Element[]} divElements
 * @param {RegExp} regex
 * @return {Element[]}
 */
function checkDivMatch(divElements, regex) {
  return divElements.filter(el => textFilter(el, regex)).filter(el => checkVisibilityForSignals(el));
}

/**
 * Returns all elements that are visible in the document body using a selector.
 * @param {Element} documentBody
 * @return {Element[]}
 */
function getDivsContainingAccountCheck(documentBody) {
  return getElementDescendants(documentBody, 'div,span,p');
}

/**
 * Returns all potential button elements that can be seen in the DOM body.
 * @param {Element} documentBody
 * @return {Element[]}
 */
function getAllVisibleButtons(documentBody) {
  let visibleButtons = getAllVisibleElements(documentBody, 'input[type=submit],input[type=image],button');
  if (!visibleButtons.length) {
    // If no buttons are found, look for spans with a click handler.
    visibleButtons = getAllVisibleElements(documentBody, 'span');
  }
  return visibleButtons;
}

/**
 * Verifies that a next or register button is next to the username or email boxes.
 * @param {Element[]} visibleEmailUsernameElements
 * @param {Element} button
 * @return {boolean}
 */
function hasButtonCloseToInputs(visibleEmailUsernameElements, button) {
  for (const field of visibleEmailUsernameElements) {
    if (isElementNearToAnother(button, field) > 0.5) return true;
  }
  return false;
}
