import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase_url = "https://ptvvkouigvqzeripznvp.supabase.co"
const public_anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0dnZrb3VpZ3ZxemVyaXB6bnZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MDg1MzcsImV4cCI6MjA2ODA4NDUzN30.uACclPUvQPl5YWHb7O9dxpT494bLkWFS2XMFhQ7nJL0"

const supabase = createClient(supabase_url, public_anon_key)