import 'dotenv/config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl: any = process.env.SUPABASE_URL;
const supabaseAnonKey: any  = process.env.ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    localStorage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
});
