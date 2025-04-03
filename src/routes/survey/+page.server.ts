import type { Actions } from './$types';
import { supabase } from '$lib/supabaseClient';

export const actions = {
    default: async ({ request }) => {
        console.log('Attempted submit while disabled...');
        // const form = Object.fromEntries(await request.formData());
        // console.log(form);
        // const { error: data_error } = await supabase
        //     .from('responses')
        //     .insert({
        //         name: form.name,
        //         age: form.age,
        //         gender: form.gender,
        //         comp_1: form.comp_1,
        //         comp_2: form.comp_2,
        //         comp_3: form.comp_3,
        //         comp_4: form.comp_4,
        //         comp_5: form.comp_5,
        //         comp_6: form.comp_6,
        //         comp_7: form.comp_7,
        //         comp_8: form.comp_8,
        //         comp_9: form.comp_9,
        //         comp_10: form.comp_10,
        //         comp_11: form.comp_11,
        //         comp_12: form.comp_12,
        //         comp_13: form.comp_13,
        //         initials: form.initials,
        //     });
        // if (data_error) {
        //     console.log('Failed to upload response to database.');
        //     console.log('Insert Error: ', data_error);
        //     return {
        //         error: true,
        //     }
        // } else {
        //     console.log('Added response to database.');
        // }
        // return {
        //     success: true,
        // };
    }
} satisfies Actions;