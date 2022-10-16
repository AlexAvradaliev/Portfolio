import isEmail from 'validator/lib/isEmail';
import trim from 'validator/lib/trim';

const title = {
    name: 'Names',
    email: 'E-mail',
    message: 'Message',
};

const minLength = {
    name: 1,
    message: 20,
   
};

const maxLength = {
    name: 24,
    message: 300,
    
};

export const inputText = (name, value) => {
    value = trim(value);
    if (value.length === 0) {
        return { [name]: ["Required"] };

    } else if (value.length > maxLength[name]) {
        return { [name]: [`The ${title[name]} can be maximum ${maxLength[name]} characters`] };

    } else if (value.length < minLength[name]) {
        return { [name]: [`The ${title[name]} can be minimum ${minLength[name]} characters`] };
    };
};

export const inputEmail = (name, value) => {
    value = value.trim();
    const email = isEmail(value);
    if (value.length === 0) {
        return { [name]: ["Required"] };

    } else if (!email) {
        return { [name]: [`Email must be a be valid`] };
    };
};
