import { createClient } from '@supabase/supabase-js';
import { SUPABASE_PRIVATE_KEY } from '$env/static/private';

const supabaseURL = 'https://hatslhxtyerikghdqeyk.supabase.co';

export const supabase = createClient(supabaseURL, SUPABASE_PRIVATE_KEY);