import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://qrtbqbpdaqjdxkoiyvqu.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydGJxYnBkYXFqZHhrb2l5dnF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ4MTAsImV4cCI6MjA0MTQ4MDgxMH0.IgdQTOn0kStLyVxQVXUESepduqPBQlZHuy33VZZic3M')

export default supabase;