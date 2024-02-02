/**
 * This file contains feature extraction techniques tailored to registration-only and login-only websites. 
 */

class RegisterLoginSignals {
    constructor() {
        this.formSignals = new FormSignals();
        this.inputSignals = new InputSignals();
        this.buttonSignals = new ButtonSignals();
        this.divSignals = new DivSignals();
        this.passwordSignals = new PasswordSignals();
        this.headerSignals = new HeaderSignals();
        this.checkboxSignals = new CheckboxSignals();
        this.labelSignals = new LabelSignals();
        this.anchorSignals = new AnchorSignals();
        this.url = '';
    }
}

class FormSignals {
    constructor() {
        this.has_newsletter_pattern_in_attrs = false;
        this.has_forgot_match_in_attrs = false;
        this.has_login_pattern_in_attrs = false;
        this.has_register_pattern_in_attrs = false;
    }
}

class InputSignals {
    constructor() {
        this.has_any_email = false;
        this.has_any_username = false;
        this.has_any_email_on_form = false;
        this.has_any_username_on_form = false;
        this.has_several_input_elements = false;
        this.has_login_pattern = false;
        this.has_login_pattern_on_form = false;
        this.has_register_pattern = false;
        this.has_register_pattern_on_form = false;
        this.has_newsletter_pattern = false;
        this.has_newsletter_pattern_on_form = false;
    }
}

class ButtonSignals {
    constructor() {
        this.has_login_pattern_attr = false;
        this.has_login_pattern_attr_on_form = false;
        this.has_login_pattern_in_text_content = false;
        this.has_login_pattern_in_text_content_on_form = false;
        this.has_register_pattern_attr = false;
        this.has_register_pattern_attr_on_form = false;
        this.has_register_pattern_in_text_content = false;
        this.has_register_pattern_in_text_content_on_form = false;
        this.has_forgot_pattern_in_attrs = false;
        this.has_forgot_pattern_in_attrs_on_form = false;
        this.has_forgot_pattern_in_text_content = false;
        this.has_forgot_pattern_in_text_content_on_form = false;
        this.has_next_button_close_to_username_email_fields = false;
        this.has_next_button_close_to_username_email_fields_on_form = false;
        this.has_next_pattern_in_attrs = false;
        this.has_next_pattern_in_attrs_on_form = false;
        this.has_next_pattern_in_text_content = false;
        this.has_next_pattern_in_text_content_on_form = false;
        this.has_newsletter_pattern_in_attrs = false;
        this.has_newsletter_pattern_in_attrs_on_form = false;
        this.has_newsletter_pattern_in_text_content = false;
        this.has_newsletter_pattern_in_text_content_on_form = false;
        this.has_loginy_button_close_to_username_email_fields = false;
        this.has_loginy_button_close_to_username_email_fields_on_form = false;
        this.has_registery_button_close_to_username_email_fields = false;
        this.has_registery_button_close_to_username_email_fields_on_form = false;
    }
}

class AnchorSignals {
    constructor() {
        this.has_forgot_password_pattern_in_text_content = false;
        this.has_forgot_password_pattern_in_attrs = false;
        this.has_forgot_password_pattern_in_text_content_on_form = false;
        this.has_forgot_password_pattern_in_attrs_on_form = false;
    }
}

class LabelSignals {
    constructor() {
        this.has_remember_pattern_in_attrs = false;
        this.has_remember_pattern_in_attrs_on_form = false;
        this.has_remember_pattern_in_text_content = false;
        this.has_remember_pattern_in_text_content_on_form = false;
        this.has_newsletter_pattern_in_attrs = false;
        this.has_newsletter_pattern_in_attrs_on_form = false;
        this.has_newsletter_pattern_in_text_content = false;
        this.has_newsletter_pattern_in_text_content_on_form = false;
    }
}

class HeaderSignals {
    constructor() {
        this.has_login_pattern_attr = false;
        this.has_login_pattern_attr_on_form = false;
        this.has_login_pattern_in_text_content = false;
        this.has_login_pattern_in_text_content_on_form = false;
        this.has_register_pattern_attr = false;
        this.has_register_pattern_attr_on_form = false;
        this.has_register_pattern_in_text_content = false;
        this.has_register_pattern_in_text_content_on_form = false;
        this.has_newsletter_pattern_in_attrs = false;
        this.has_newsletter_pattern_in_attrs_on_form = false;
        this.has_newsletter_pattern_in_text_content = false;
        this.has_newsletter_pattern_in_text_content_on_form = false;
        this.has_forgot_pattern_in_attrs = false;
        this.has_forgot_pattern_in_attrs_on_form = false;
        this.has_forgot_pattern_in_text_content = false;
        this.has_forgot_pattern_in_text_content_on_form = false;
    }
}


class CheckboxSignals {
    constructor() {
        this.has_newsletter_pattern = false;
        this.has_newsletter_pattern_on_form = false;
        this.has_remember_me_pattern = false;
        this.has_remember_me_pattern_on_form = false;
    }
}

class PasswordSignals {
    constructor() {
        this.has_label_placeholder_aria_label_contains_confirm_pattern = false;
        this.has_label_placeholder_aria_label_contains_confirm_pattern_on_form = false;
        this.has_label_placeholder_aria_label_contains_current_pattern = false;
        this.has_label_placeholder_aria_label_contains_current_pattern_on_form = false;
        this.has_label_placeholder_aria_label_contains_new_pattern = false;
        this.has_label_placeholder_aria_label_contains_new_pattern_on_form = false;
        this.has_any_password_field = false;
        this.has_several_password_fields = false;
    }
}

class DivSignals {
    constructor() {
        this.has_already_have_acc_pattern = false;
        this.has_already_have_acc_pattern_on_form = false;
        this.has_not_have_acc_pattern = false;
        this.has_not_have_acc_pattern_on_form = false;
        this.has_newsletter_pattern = false;
    }
}

/**
 * Page element collection class. These components are read and used to identify the login and registration pages.
 */
function getLoginSignupControlObj() {
    const documentBody = document.body;
    return [
        {
            elements: getAllVisibleElements(documentBody, 'form'),
            type: 'form',
            featureControlFunction: controlFormSignals,
        },
        {
            elements: getAllVisibleButtons(documentBody),
            type: 'button',
            featureControlFunction: checkButtonSignals,
        },
        {
            elements: getAllVisibleElements(documentBody, 'a'),
            type: 'anchor',
            featureControlFunction: controlAnchorSignals,
        },
        {
            elements: getAllVisibleElements(documentBody, 'label'),
            type: 'label',
            featureControlFunction: controlLabelSignals,
        },
        {
            elements: getAllVisibleHeaders(documentBody),
            type: 'header',
            featureControlFunction: controlHeaderSignals,
        },
        {
            elements: getAllVisibleElements(documentBody, 'input[type=checkbox]'),
            type: 'checkbox',
            featureControlFunction: controlCheckboxSignals,
        },
        {
            elements: getAllVisibleElements(
                documentBody,
                'input:not([type=submit]):not([type=password]):not([type=checkbox]):not([type=image])'),
            type: 'input',
            featureControlFunction: controlInputSignals,
        },
        {
            elements: getAllVisibleElements(documentBody, 'input[type=password]'),
            type: 'password',
            featureControlFunction: controlPasswordSignals,
        },
        {
            elements: getDivsContainingAccountCheck(documentBody),
            type: 'div',
            featureControlFunction: controlDivSignals,
        }
    ];
}

/**
 * Returns the page's login and signup signals.
 */
function getSignupLoginSignalsFromPage() {
    const loginSignupSignalsController = getLoginSignupControlObj();
    const pageSignals = new RegisterLoginSignals();
    for (const controlObj of loginSignupSignalsController) {
        const elementSignals = controlObj.featureControlFunction(controlObj.elements);
        switch (controlObj.type) {
            case 'header':
                // @ts-ignore
                pageSignals.headerSignals = elementSignals;
                break;
            case 'label':
                // @ts-ignore
                pageSignals.labelSignals = elementSignals
                break;
            case 'password':
                // @ts-ignore
                pageSignals.passwordSignals = elementSignals;
                break;
            case 'input':
                // @ts-ignore
                pageSignals.inputSignals = elementSignals;
                break;
            case 'checkbox':
                // @ts-ignore
                pageSignals.checkboxSignals = elementSignals;
                break;
            case 'button':
                // @ts-ignore
                pageSignals.buttonSignals = elementSignals;
                break;
            case 'form':
                // @ts-ignore
                pageSignals.formSignals = elementSignals;
                break;
            case 'anchor':
                // @ts-ignore
                pageSignals.anchorSignals = elementSignals;
                break;
            case 'div':
                // @ts-ignore
                pageSignals.divSignals = elementSignals;
                break;
            default:
                throw new Error(`Unexpected element type: ${controlObj.type}`);
        }
    }
    pageSignals.url = window.location.href;
    return pageSignals;
}

/**
 * @param {Element[]} forms
 * @return {FormSignals}
 */
function controlFormSignals(forms) {
    const formSignals = new FormSignals();
    for (const form of forms) {
        const hasLogin = hasMatchOnAttrs(form, [loginActionRegexPattern]);
        const hasRegister = hasMatchOnAttrs(form, [registerActionRegex]);
        const hasNewsletter =
            hasMatchOnAttrs(form, [newsletterRegexPattern]);
        const hasForgot = hasMatchOnAttrs(form, [forgotLinkRegexPattern]);

        if (hasLogin) formSignals.has_login_pattern_in_attrs = true;
        if (hasRegister) formSignals.has_register_pattern_in_attrs = true;
        if (hasNewsletter) formSignals.has_newsletter_pattern_in_attrs = true;
        if (hasForgot) formSignals.has_forgot_match_in_attrs = true;
    }
    return formSignals;
}

/**
 * @param {Element[]} elements
 * @return {AnchorSignals}
 */
function controlAnchorSignals(elements) {
    const anchorSignals = new AnchorSignals();
    for (const element of elements) {
        const hasAnchorForgotPasswordMatchAttr = hasMatchOnAttrs(
            element, [passwordAttrRegexPattern, forgotLinkRegexPattern]);
        const hasAnchorForgotPasswordMatchTextContent = hasTextContentMatch(
            element,
            [passwordAttrRegexPattern, forgotLinkRegexPattern]);
        const isInForm = isInAForm(element);

        if (hasAnchorForgotPasswordMatchAttr) {
            anchorSignals.has_forgot_password_pattern_in_attrs = true;
        }
        if (hasAnchorForgotPasswordMatchAttr && isInForm) {
            anchorSignals.has_forgot_password_pattern_in_attrs_on_form = true;
        }
        if (hasAnchorForgotPasswordMatchTextContent) {
            anchorSignals.has_forgot_password_pattern_in_text_content = true;
        }
        if (hasAnchorForgotPasswordMatchTextContent && isInForm) {
            anchorSignals.has_forgot_password_pattern_in_text_content_on_form = true;
        }
    }
    return anchorSignals;
}

/**
 * @param {Element[]} divElements
 * @return {DivSignals}
 */
function controlDivSignals(divElements) {
    const divSignals = new DivSignals();
    const alreadyMatchDiv =
        checkDivMatch(divElements, haveAlreadyRegex).slice(-1);
    const notHaveMatchDiv =
        checkDivMatch(divElements, notHaveRegex).slice(-1);
    const newsletterMatchDiv =
        checkDivMatch(divElements, newsletterRegexPattern).slice(-1);

    if (alreadyMatchDiv.length) {
        const hasAlreadyMatchEl = alreadyMatchDiv[0];
        divSignals.has_already_have_acc_pattern = true;
        if (isInAForm(hasAlreadyMatchEl)) {
            divSignals.has_already_have_acc_pattern_on_form = true;
        }
    }
    if (notHaveMatchDiv.length) {
        const notHaveMatchEl = notHaveMatchDiv[0];
        divSignals.has_not_have_acc_pattern = true;
        if (isInAForm(notHaveMatchEl)) {
            divSignals.has_not_have_acc_pattern_on_form = true;
        }
    }
    if (newsletterMatchDiv.length) {
        divSignals.has_newsletter_pattern = true;
    }
    return divSignals;
}



/**
 * Verifies that the page's URL has reset password pattern.
 * @param {string} pageUrl
 * @return {boolean}
 */
function hasResetPattern(pageUrl) {
    const forgotPattern = new RegExp('remind|find|request|restore|forgot|reset|recover|change|lost', 'i');
    const passwordPattern = new RegExp('pword|passwd|pswd|psswd|password|pwd|pass|psw|pwd|pssw|passw|passwort|credentials|contrasena', 'i');
    return [forgotPattern, passwordPattern].every(pattern => pattern.test(pageUrl));
}

/**
 * Verifies that the page's URL has newsletter pattern.
 * @param {string} pageUrl
 * @return {boolean}
 */
function hasNewsletterPattern(pageUrl) {
    const newsletterPattern = new RegExp('maillist|mailinglist|email-list|newsletter|bulletin|email_list|emaillist|mailing-list', 'i');
    return newsletterPattern.test(pageUrl);
}

/**
 * @param {Element[]} elements
 * @return {ButtonSignals}
 */
function checkButtonSignals(elements) {
    const buttonSignals = new ButtonSignals();
    const documentBody = document.body;
    const usernames = getVisibleUsernameFields(documentBody, usernameRegexPattern);
    const emails = geVisibleEmailFields(documentBody);
    for (const element of elements) {
        const hasForgotMatchAttr =
            hasMatchOnAttrs(element, [forgotLinkRegexPattern]);
        const hasForgotMatchTextContent =
            hasTextContentMatch(element, [forgotExactCombinedRegexPattern]);
        const hasLoginMatchAttr =
            hasMatchOnAttrs(element, [loginActionRegexPattern]);
        const hasLoginMatchTextContent =
            hasTextContentMatch(element, [loginExactCombinedRegexPattern]);
        const hasRegisterMatchAttr =
            hasMatchOnAttrs(element, [registerActionRegex]);
        const hasRegisterMatchTextContent =
            hasTextContentMatch(element, [registerExactCombinedRegexPattern]);
        const hasNewsletterMatchAttr =
            hasMatchOnAttrs(element, [newsletterRegexPattern]);
        const hasNewsletterMatchTextContent =
            hasTextContentMatch(element, [newsletterRegexPattern]);
        const hasNextMatchAttr =
            hasMatchOnAttrs(element, [nextOrContinueRegexPattern]);
        const hasNextMatchTextContent =
            hasTextContentMatch(element, [nextOrContinueRegexPattern]);
        const hasLoginButtonCloseToInput =
            hasButtonCloseToUsernameOrEmail(emails, usernames, element);
        const hasRegisterButtonCloseToInput =
            hasButtonCloseToUsernameOrEmail(emails, usernames, element);
        const hasNextButtonCloseToInput =
            hasButtonCloseToUsernameOrEmail(emails, usernames, element);
        const isInForm = isInAForm(element);

        if (hasForgotMatchAttr) {
            buttonSignals.has_forgot_pattern_in_attrs = true;
        }
        if (hasForgotMatchAttr && isInForm) {
            buttonSignals.has_forgot_pattern_in_attrs_on_form = true;
        }
        if (hasForgotMatchTextContent) {
            buttonSignals.has_forgot_pattern_in_text_content = true;
        }
        if (hasForgotMatchTextContent && isInForm) {
            buttonSignals.has_forgot_pattern_in_text_content_on_form = true;
        }
        if (hasLoginMatchAttr) {
            buttonSignals.has_login_pattern_attr = true;
        }
        if (hasLoginMatchAttr && isInForm) {
            buttonSignals.has_forgot_pattern_in_attrs_on_form = true;
        }
        if (hasLoginMatchTextContent) {
            buttonSignals.has_login_pattern_in_text_content = true;
        }
        if (hasLoginMatchTextContent && isInForm) {
            buttonSignals.has_login_pattern_in_text_content_on_form = true;
        }
        if (hasRegisterMatchAttr) {
            buttonSignals.has_register_pattern_attr = true;
        }
        if (hasRegisterMatchAttr && isInForm) {
            buttonSignals.has_register_pattern_attr_on_form = true;
        }
        if (hasRegisterMatchTextContent) {
            buttonSignals.has_register_pattern_in_text_content = true;
        }
        if (hasRegisterMatchTextContent && isInForm) {
            buttonSignals.has_register_pattern_in_text_content_on_form = true;
        }
        if (hasNewsletterMatchAttr) {
            buttonSignals.has_newsletter_pattern_in_attrs = true;
        }
        if (hasNewsletterMatchAttr && isInForm) {
            buttonSignals.has_newsletter_pattern_in_attrs_on_form = true;
        }
        if (hasNewsletterMatchTextContent) {
            buttonSignals.has_newsletter_pattern_in_text_content = true;
        }
        if (hasNewsletterMatchTextContent && isInForm) {
            buttonSignals.has_newsletter_pattern_in_text_content_on_form = true;
        }
        if (hasNextMatchAttr) {
            buttonSignals.has_next_pattern_in_attrs = true;
        }
        if (hasNextMatchAttr && isInForm) {
            buttonSignals.has_next_pattern_in_attrs_on_form = true;
        }
        if (hasNextMatchTextContent) {
            buttonSignals.has_next_pattern_in_text_content = true;
        }
        if (hasNextMatchTextContent && isInForm) {
            buttonSignals.has_next_pattern_in_text_content_on_form = true;
        }
        if (hasNextMatchTextContent && hasNextButtonCloseToInput) {
            buttonSignals.has_next_button_close_to_username_email_fields = true;
        }
        if (hasNextMatchTextContent && hasNextButtonCloseToInput && isInForm) {
            buttonSignals.has_next_button_close_to_username_email_fields_on_form = true;
        }
        if (hasLoginMatchTextContent && hasLoginButtonCloseToInput) {
            buttonSignals.has_loginy_button_close_to_username_email_fields = true;
        }
        if (hasLoginMatchTextContent && hasLoginButtonCloseToInput &&
            isInForm) {
            buttonSignals.has_loginy_button_close_to_username_email_fields_on_form = true;
        }
        if (hasRegisterMatchTextContent && hasRegisterButtonCloseToInput) {
            buttonSignals.has_registery_button_close_to_username_email_fields = true;
        }
        if (hasRegisterMatchTextContent && hasRegisterButtonCloseToInput &&
            isInForm) {
            buttonSignals.has_registery_button_close_to_username_email_fields_on_form = true;
        }
    }
    return buttonSignals;
}

/**
 * @param {Element[]} elements
 * @return {InputSignals}s
 */
function controlInputSignals(elements) {
    const inputSignals = new InputSignals();
    let numInputFields = 0;
    for (const element of elements) {
        const hasLoginMatch = attrsAndTextMatch(
            element, [loginActionRegexPattern],
            [loginExactCombinedRegexPattern]);
        const hasRegisterMatch = attrsAndTextMatch(
            element, [registerActionRegex],
            [registerExactCombinedRegexPattern]);
        const hasNewsletterMatch = attrsAndTextMatch(
            element, [newsletterRegexPattern],
            [newsletterRegexPattern]);
        const isEmail = isEmailField(element);
        const isUsername = isUsernameField(element, usernameRegexPattern);
        // @ts-ignore
        const isPersonalInputField = canFieldContainPersonalData(element);
        const isInForm = isInAForm(element);

        if (hasLoginMatch) inputSignals.has_login_pattern = true;
        if (hasRegisterMatch) inputSignals.has_register_pattern = true;
        if (hasNewsletterMatch) inputSignals.has_newsletter_pattern = true;
        if (isEmail) inputSignals.has_any_email = true;
        if (isUsername) inputSignals.has_any_username = true;
        if (isPersonalInputField) numInputFields += 1;
        if (hasLoginMatch && isInForm) {
            inputSignals.has_login_pattern = true;
        }
        if (hasRegisterMatch && isInForm) {
            inputSignals.has_register_pattern = true;
        }
        if (hasNewsletterMatch && isInForm) {
            inputSignals.has_newsletter_pattern = true;
        }
        if (isEmail && isInForm) inputSignals.has_any_email_on_form = true;
        if (isUsername && isInForm) {
            inputSignals.has_any_username_on_form = true;
        }
        if (numInputFields > 1) {
            inputSignals.has_several_input_elements = true;
        }
    }
    return inputSignals;
}

/**
 * @param {Element[]} elements
 * @return {LabelSignals}
 */
function controlLabelSignals(elements) {
    const labelSignals = new LabelSignals();
    for (const element of elements) {
        const hasRememberMatchAttr =
            hasMatchOnAttrs(element, [rememberMeActionRegex]);
        const hasRememberMatchTextContent =
            hasTextContentMatch(element, [rememberMeRegexPattern]);
        const hasNewsletterMatchAttr =
            hasMatchOnAttrs(element, [newsletterRegexPattern]);
        const hasNewsletterMatchTextContent =
            hasTextContentMatch(element, [newsletterRegexPattern]);
        const isInForm = isInAForm(element);

        if (hasRememberMatchAttr) {
            labelSignals.has_remember_pattern_in_attrs = true;
        }
        if (hasRememberMatchAttr && isInForm) {
            labelSignals.has_remember_pattern_in_attrs_on_form = true;
        }
        if (hasRememberMatchTextContent) {
            labelSignals.has_remember_pattern_in_text_content = true;
        }
        if (hasRememberMatchTextContent && isInForm) {
            labelSignals.has_remember_pattern_in_text_content_on_form = true;
        }
        if (hasNewsletterMatchAttr) {
            labelSignals.has_newsletter_pattern_in_attrs = true;
        }
        if (hasNewsletterMatchAttr && isInForm) {
            labelSignals.has_newsletter_pattern_in_attrs_on_form = true;
        }
        if (hasNewsletterMatchTextContent) {
            labelSignals.has_newsletter_pattern_in_text_content = true;
        }
        if (hasNewsletterMatchTextContent && isInForm) {
            labelSignals.has_newsletter_pattern_in_text_content_on_form = true;
        }
    }
    return labelSignals;
}

/**
 * @param {Element[]} elements
 * @return {HeaderSignals}
 */
function controlHeaderSignals(elements) {
    const headerSignals = new HeaderSignals();
    for (const element of elements) {
        const hasLoginMatchAttr =
            hasMatchOnAttrs(element, [loginActionRegexPattern]);
        const hasLoginMatchTextContent =
            hasTextContentMatch(element, [loginExactCombinedRegexPattern]);
        const hasRegisterMatchAttr =
            hasMatchOnAttrs(element, [registerActionRegex]);
        const hasRegisterMatchTextContent =
            hasTextContentMatch(element, [registerExactCombinedRegexPattern]);
        const hasNewsletterMatchAttr =
            hasMatchOnAttrs(element, [newsletterRegexPattern]);
        const hasNewsletterMatchTextContent =
            hasTextContentMatch(element, [newsletterRegexPattern]);
        const hasForgotMatchAttr =
            hasMatchOnAttrs(element, [forgotLinkRegexPattern]);
        const hasForgotMatchTextContent =
            hasTextContentMatch(element, [forgotExactCombinedRegexPattern]);
        const isInForm = isInAForm(element);

        if (hasLoginMatchAttr) {
            headerSignals.has_login_pattern_attr = true;
        }
        if (hasLoginMatchAttr && isInForm) {
            headerSignals.has_login_pattern_attr_on_form = true;
        }
        if (hasLoginMatchTextContent) {
            headerSignals.has_login_pattern_in_text_content = true;
        }
        if (hasLoginMatchTextContent && isInForm) {
            headerSignals.has_login_pattern_in_text_content_on_form = true;
        }
        if (hasRegisterMatchAttr) {
            headerSignals.has_register_pattern_attr = true;
        }
        if (hasRegisterMatchAttr && isInForm) {
            headerSignals.has_register_pattern_attr_on_form = true;
        }
        if (hasRegisterMatchTextContent) {
            headerSignals.has_register_pattern_in_text_content = true;
        }
        if (hasRegisterMatchTextContent && isInForm) {
            headerSignals.has_register_pattern_in_text_content = true;
        }
        if (hasNewsletterMatchAttr) {
            headerSignals.has_newsletter_pattern_in_attrs = true;
        }
        if (hasNewsletterMatchAttr && isInForm) {
            headerSignals.has_newsletter_pattern_in_attrs_on_form = true;
        }
        if (hasNewsletterMatchTextContent) {
            headerSignals.has_newsletter_pattern_in_text_content = true;
        }
        if (hasNewsletterMatchTextContent && isInForm) {
            headerSignals.has_newsletter_pattern_in_text_content_on_form = true;
        }
        if (hasForgotMatchAttr) {
            headerSignals.has_forgot_pattern_in_attrs = true;
        }
        if (hasForgotMatchAttr && isInForm) {
            headerSignals.has_forgot_pattern_in_attrs_on_form = true;
        }
        if (hasForgotMatchTextContent) {
            headerSignals.has_forgot_pattern_in_text_content = true;
        }
        if (hasForgotMatchTextContent && isInForm) {
            headerSignals.has_forgot_pattern_in_text_content_on_form = true;
        }
    }
    return headerSignals;
}

/**
 * @param {Element[]} elements
 * @return {CheckboxSignals}
 */
function controlCheckboxSignals(elements) {
    const checkboxSignals = new CheckboxSignals();
    for (const element of elements) {
        const hasNewsletterMatch = attrsAndTextMatch(
            element, [newsletterRegexPattern],
            [newsletterRegexPattern]);
        const hasRememberMeMatch = attrsAndTextMatch(
            element, [rememberMeActionRegex],
            [rememberMeRegexPattern]);
        const isInForm = isInAForm(element);

        if (hasNewsletterMatch) {
            checkboxSignals.has_newsletter_pattern = true;
        }
        if (hasNewsletterMatch && isInForm) {
            checkboxSignals.has_newsletter_pattern_on_form = true;
        }
        if (hasRememberMeMatch) {
            checkboxSignals.has_remember_me_pattern = true;
        }
        if (hasRememberMeMatch && isInForm) {
            checkboxSignals.has_remember_me_pattern_on_form = true;
        }
    }
    return checkboxSignals;
}

/**
 * @param {Element[]} elements
 * @return {PasswordSignals}
 */
function controlPasswordSignals(elements) {
    const pwdSignals = new PasswordSignals();
    for (const element of elements) {
        if (!(element instanceof HTMLInputElement)) continue;
        const hasConfirmLabel = hasMatchOnLabelAriaLabelPlaceholder(
            element, confirmRegexPattern);
        const hasCurrentLabel = hasMatchOnLabelAriaLabelPlaceholder(
            element, currentRegexPattern);
        const hasNewLabel = hasMatchOnLabelAriaLabelPlaceholder(
            element, newRegexPattern);
        const isInForm = isInAForm(element);

        if (hasConfirmLabel) {
            pwdSignals.has_label_placeholder_aria_label_contains_confirm_pattern = true;
        }
        if (hasConfirmLabel && isInForm) {
            pwdSignals.has_label_placeholder_aria_label_contains_confirm_pattern_on_form = true;
        }
        if (hasCurrentLabel) {
            pwdSignals.has_label_placeholder_aria_label_contains_current_pattern = true;
        }
        if (hasCurrentLabel && isInForm) {
            pwdSignals.has_label_placeholder_aria_label_contains_current_pattern_on_form = true;
        }
        if (hasNewLabel) {
            pwdSignals.has_label_placeholder_aria_label_contains_new_pattern = true;
        }
        if (hasNewLabel && isInForm) {
            pwdSignals.has_label_placeholder_aria_label_contains_new_pattern_on_form = true;
        }
        if (elements.length === 1) {
            pwdSignals.has_any_password_field = true;
        } else if (elements.length > 1) {
            pwdSignals.has_several_password_fields = true;
        }
    }
    return pwdSignals;
}

/**
 * Convert signup and login signals to a binary array.
 * @param {RegisterLoginSignals} pageSignals
 * @return {boolean[]} A binary array.
 */
function convertPageSignalsToVector(pageSignals) {
    const pageSignalResult = [];
    if (!pageSignals) return [];
    const formSignals = pageSignals.formSignals;
    const anchorSignals = pageSignals.anchorSignals;
    const buttonSignals = pageSignals.buttonSignals;
    const inputSignals = pageSignals.inputSignals;
    const labelSignals = pageSignals.labelSignals;
    const headerSignals = pageSignals.headerSignals;
    const checkboxSignals = pageSignals.checkboxSignals;
    const pwdSignals = pageSignals.passwordSignals;
    const divSignals = pageSignals.divSignals;
    if (formSignals) {
        pageSignalResult.push(formSignals.has_login_pattern_in_attrs);
        pageSignalResult.push(formSignals.has_register_pattern_in_attrs);
        pageSignalResult.push(formSignals.has_newsletter_pattern_in_attrs);
        pageSignalResult.push(formSignals.has_forgot_match_in_attrs);
    } else {
        pageSignalResult.push(...new Array(4).fill(false));
    }
    if (anchorSignals) {
        pageSignalResult.push(anchorSignals.has_forgot_password_pattern_in_text_content);
        pageSignalResult.push(anchorSignals.has_forgot_password_pattern_in_attrs);
        pageSignalResult.push(
            anchorSignals.has_forgot_password_pattern_in_text_content_on_form);
        pageSignalResult.push(anchorSignals.has_forgot_password_pattern_in_attrs_on_form);
    } else {
        pageSignalResult.push(...new Array(4).fill(false));
    }
    if (buttonSignals) {
        pageSignalResult.push(buttonSignals.has_forgot_pattern_in_attrs);
        pageSignalResult.push(buttonSignals.has_forgot_pattern_in_attrs_on_form);
        pageSignalResult.push(buttonSignals.has_forgot_pattern_in_text_content);
        pageSignalResult.push(buttonSignals.has_forgot_pattern_in_text_content_on_form);
        pageSignalResult.push(buttonSignals.has_login_pattern_attr);
        pageSignalResult.push(buttonSignals.has_login_pattern_attr_on_form);
        pageSignalResult.push(buttonSignals.has_login_pattern_in_text_content);
        pageSignalResult.push(buttonSignals.has_login_pattern_in_text_content_on_form);
        pageSignalResult.push(buttonSignals.has_register_pattern_attr);
        pageSignalResult.push(buttonSignals.has_register_pattern_attr);
        pageSignalResult.push(buttonSignals.has_register_pattern_in_text_content);
        pageSignalResult.push(buttonSignals.has_register_pattern_in_text_content_on_form);
        pageSignalResult.push(buttonSignals.has_next_pattern_in_attrs);
        pageSignalResult.push(buttonSignals.has_next_pattern_in_attrs_on_form);
        pageSignalResult.push(buttonSignals.has_next_pattern_in_text_content);
        pageSignalResult.push(buttonSignals.has_next_pattern_in_text_content_on_form);
        pageSignalResult.push(buttonSignals.has_newsletter_pattern_in_attrs);
        pageSignalResult.push(buttonSignals.has_newsletter_pattern_in_attrs_on_form);
        pageSignalResult.push(buttonSignals.has_newsletter_pattern_in_text_content);
        pageSignalResult.push(
            buttonSignals.has_newsletter_pattern_in_text_content_on_form);
        pageSignalResult.push(
            buttonSignals.has_loginy_button_close_to_username_email_fields);
        pageSignalResult.push(
            buttonSignals.has_loginy_button_close_to_username_email_fields_on_form);
        pageSignalResult.push(
            buttonSignals.has_registery_button_close_to_username_email_fields);
        pageSignalResult.push(
            buttonSignals.has_registery_button_close_to_username_email_fields_on_form);
        pageSignalResult.push(buttonSignals.has_next_button_close_to_username_email_fields);
        pageSignalResult.push(
            buttonSignals.has_next_button_close_to_username_email_fields_on_form);
    } else {
        pageSignalResult.push(...new Array(26).fill(false));
    }
    if (inputSignals) {
        pageSignalResult.push(inputSignals.has_login_pattern);
        pageSignalResult.push(inputSignals.has_login_pattern_on_form);
        pageSignalResult.push(inputSignals.has_register_pattern);
        pageSignalResult.push(inputSignals.has_register_pattern_on_form);
        pageSignalResult.push(inputSignals.has_newsletter_pattern);
        pageSignalResult.push(inputSignals.has_newsletter_pattern_on_form);
        pageSignalResult.push(inputSignals.has_any_email);
        pageSignalResult.push(inputSignals.has_any_username);
        pageSignalResult.push(inputSignals.has_any_email_on_form);
        pageSignalResult.push(inputSignals.has_any_username_on_form);
        pageSignalResult.push(inputSignals.has_several_input_elements);
    } else {
        pageSignalResult.push(...new Array(11).fill(false));
    }
    if (labelSignals) {
        pageSignalResult.push(labelSignals.has_remember_pattern_in_attrs);
        pageSignalResult.push(labelSignals.has_remember_pattern_in_attrs_on_form);
        pageSignalResult.push(labelSignals.has_remember_pattern_in_text_content);
        pageSignalResult.push(labelSignals.has_remember_pattern_in_text_content_on_form);
        pageSignalResult.push(labelSignals.has_newsletter_pattern_in_attrs);
        pageSignalResult.push(labelSignals.has_newsletter_pattern_in_attrs_on_form);
        pageSignalResult.push(labelSignals.has_newsletter_pattern_in_text_content);
        pageSignalResult.push(
            labelSignals.has_newsletter_pattern_in_text_content_on_form);
    } else {
        pageSignalResult.push(...new Array(8).fill(false));
    }
    if (headerSignals) {
        pageSignalResult.push(headerSignals.has_login_pattern_attr);
        pageSignalResult.push(headerSignals.has_login_pattern_attr_on_form);
        pageSignalResult.push(headerSignals.has_login_pattern_in_text_content);
        pageSignalResult.push(headerSignals.has_login_pattern_in_text_content_on_form);
        pageSignalResult.push(headerSignals.has_register_pattern_attr);
        pageSignalResult.push(headerSignals.has_register_pattern_attr_on_form);
        pageSignalResult.push(headerSignals.has_register_pattern_in_text_content);
        pageSignalResult.push(headerSignals.has_register_pattern_in_text_content_on_form);
        pageSignalResult.push(headerSignals.has_newsletter_pattern_in_attrs);
        pageSignalResult.push(headerSignals.has_newsletter_pattern_in_attrs_on_form);
        pageSignalResult.push(headerSignals.has_newsletter_pattern_in_text_content);
        pageSignalResult.push(
            headerSignals.has_newsletter_pattern_in_text_content_on_form);
        pageSignalResult.push(headerSignals.has_forgot_pattern_in_attrs);
        pageSignalResult.push(headerSignals.has_forgot_pattern_in_attrs_on_form);
        pageSignalResult.push(headerSignals.has_forgot_pattern_in_text_content);
        pageSignalResult.push(headerSignals.has_forgot_pattern_in_text_content_on_form);
    } else {
        pageSignalResult.push(...new Array(16).fill(false));
    }
    if (checkboxSignals) {
        pageSignalResult.push(checkboxSignals.has_newsletter_pattern);
        pageSignalResult.push(checkboxSignals.has_newsletter_pattern_on_form);
        pageSignalResult.push(checkboxSignals.has_remember_me_pattern);
        pageSignalResult.push(checkboxSignals.has_remember_me_pattern_on_form);
    } else {
        pageSignalResult.push(...new Array(4).fill(false));
    }
    if (pwdSignals) {
        pageSignalResult.push(pwdSignals.has_label_placeholder_aria_label_contains_confirm_pattern);
        pageSignalResult.push(
            pwdSignals.has_label_placeholder_aria_label_contains_confirm_pattern_on_form);
        pageSignalResult.push(pwdSignals.has_label_placeholder_aria_label_contains_current_pattern);
        pageSignalResult.push(
            pwdSignals.has_label_placeholder_aria_label_contains_current_pattern_on_form);
        pageSignalResult.push(pwdSignals.has_label_placeholder_aria_label_contains_new_pattern);
        pageSignalResult.push(
            pwdSignals.has_label_placeholder_aria_label_contains_new_pattern_on_form);
        pageSignalResult.push(pwdSignals.has_any_password_field);
        pageSignalResult.push(pwdSignals.has_several_password_fields);
    } else {
        pageSignalResult.push(...new Array(8).fill(false));
    }
    if (divSignals) {
        pageSignalResult.push(divSignals.has_already_have_acc_pattern);
        pageSignalResult.push(divSignals.has_already_have_acc_pattern_on_form);
        pageSignalResult.push(divSignals.has_not_have_acc_pattern);
        pageSignalResult.push(divSignals.has_not_have_acc_pattern_on_form);
        pageSignalResult.push(divSignals.has_newsletter_pattern);
    } else {
        pageSignalResult.push(...new Array(5).fill(false));
    }
    pageSignalResult.push(hasResetPattern(pageSignals.url));
    pageSignalResult.push(hasNewsletterPattern(pageSignals.url));
    return pageSignalResult.map((signal) => signal === true ? 1 : 0);
}

function getSignalsAndConvertToBinary() {
    const signals = getSignupLoginSignalsFromPage();
    const binarySignals = convertPageSignalsToVector(signals);
    return binarySignals;
}
