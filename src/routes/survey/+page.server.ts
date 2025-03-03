import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

function generateRandomString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

export const actions = {
    default: async ({ request }) => {
        const form = Object.fromEntries(await request.formData());
        console.log(form);
        const consent_form_name = generateRandomString(16) + '_' + (form.consent_form as File).name;
        console.log(consent_form_name);
        const { data: fetch_data, error: fetch_error } = await supabase
            .from('responses')
            .select();
        if (fetch_error) {
            console.log('Failed to fetch data from database.');
            console.log('Fetch Error: ', fetch_error);
            return fail(500);
        } else {
            console.log(fetch_data);
        }
        const { error: data_error } = await supabase
            .from('responses')
            .insert({
                name: form.name,
                age: form.age,
                gender: form.gender,
                comp_1: form.comp_1,
                comp_2: form.comp_2,
                comp_3: form.comp_3,
                comp_4: form.comp_4,
                consent_file_name: consent_form_name,
            });
        if (data_error) {
            console.log('Failed to upload response to database.');
            console.log('Insert Error: ', data_error);
            return fail(500);
        } else {
            console.log('Added response to database.');
        }
        const { data: file_data, error: file_error } = await supabase
            .storage
            .from('consent-forms')
            .upload(`public/${consent_form_name}`, form.consent_form);
        if (file_error) {
            console.log('Failed to upload consent form to bucket.');
            console.log('Upload Error: ', file_error);
            return fail(500);
        } else {
            console.log('Uploaded consent form to bucket.');
        }
        return {
            success: true,
        };
    }
} satisfies Actions;