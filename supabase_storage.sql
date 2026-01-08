-- Enable the storage extension if not already enabled (usually enabled by default)
-- CREATE EXTENSION IF NOT EXISTS "storage";

-- 1. Create 'images' bucket (public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 2. Create 'files' bucket (public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('files', 'files', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Drop existing policies to avoid conflicts if re-running
DROP POLICY IF EXISTS "Public Access Images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Upload Images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Update Images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Delete Images" ON storage.objects;

DROP POLICY IF EXISTS "Public Access Files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Upload Files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Update Files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Delete Files" ON storage.objects;

-- 3. Policies for 'images' bucket

-- Public Read
CREATE POLICY "Public Access Images"
ON storage.objects FOR SELECT
USING ( bucket_id = 'images' );

-- Authenticated Insert (Upload)
CREATE POLICY "Authenticated Upload Images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'images' );

-- Authenticated Update
CREATE POLICY "Authenticated Update Images"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'images' );

-- Authenticated Delete
CREATE POLICY "Authenticated Delete Images"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'images' );


-- 4. Policies for 'files' bucket

-- Public Read
CREATE POLICY "Public Access Files"
ON storage.objects FOR SELECT
USING ( bucket_id = 'files' );

-- Authenticated Insert (Upload)
CREATE POLICY "Authenticated Upload Files"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'files' );

-- Authenticated Update
CREATE POLICY "Authenticated Update Files"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'files' );

-- Authenticated Delete
CREATE POLICY "Authenticated Delete Files"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'files' );
