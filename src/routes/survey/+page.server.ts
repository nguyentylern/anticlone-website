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
        // const { data: fetch_data, error: fetch_error } = await supabase
        //     .from('responses')
        //     .select();
        // if (fetch_error) {
        //     console.log('Failed to fetch data from database.');
        //     console.log('Fetch Error: ', fetch_error);
        //     return fail(500);
        // } else {
        //     console.log(fetch_data);
        // }
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
                initials: form.initials,
            });
        if (data_error) {
            console.log('Failed to upload response to database.');
            console.log('Insert Error: ', data_error);
            return fail(500);
        } else {
            console.log('Added response to database.');
        }
        return {
            success: true,
        };
    }
} satisfies Actions;