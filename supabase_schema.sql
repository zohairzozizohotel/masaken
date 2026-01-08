-- 1. تفعيل الإضافات الضرورية
create extension if not exists "pgcrypto";

-- 2. إعداد الجداول (Tables Setup)

-- ---------------------------------------------------------
-- جدول المشاريع (projects)
-- ---------------------------------------------------------
-- ننشئ الجدول إذا لم يكن موجوداً
create table if not exists public.projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- نتحقق من وجود الأعمدة ونضيفها إذا كانت ناقصة
alter table public.projects add column if not exists name text;
alter table public.projects add column if not exists slug text;
alter table public.projects add column if not exists description text;
alter table public.projects add column if not exists location text;
alter table public.projects add column if not exists start_year integer;
alter table public.projects add column if not exists status text default 'upcoming';
alter table public.projects add column if not exists main_image text;
alter table public.projects add column if not exists brochure text;
alter table public.projects add column if not exists link text;
-- (created_at و updated_at موجودان في الإنشاء الأساسي لكن لا ضرر من التحقق)
alter table public.projects add column if not exists created_at timestamp with time zone default timezone('utc'::text, now()) not null;
alter table public.projects add column if not exists updated_at timestamp with time zone default timezone('utc'::text, now()) not null;

-- ---------------------------------------------------------
-- جدول صور المشاريع (project_images)
-- ---------------------------------------------------------
create table if not exists public.project_images (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.project_images add column if not exists project_id uuid references public.projects(id) on delete cascade;
alter table public.project_images add column if not exists image_url text;
alter table public.project_images add column if not exists type text default 'gallery';

-- ---------------------------------------------------------
-- جدول أقسام المشروع (project_sections)
-- ---------------------------------------------------------
create table if not exists public.project_sections (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.project_sections add column if not exists project_id uuid references public.projects(id) on delete cascade;
alter table public.project_sections add column if not exists name text;
alter table public.project_sections add column if not exists description text;
alter table public.project_sections add column if not exists plan_image text;
alter table public.project_sections add column if not exists brochure text;

-- ---------------------------------------------------------
-- جدول الوحدات (units)
-- ---------------------------------------------------------
create table if not exists public.units (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.units add column if not exists section_id uuid references public.project_sections(id) on delete cascade;
alter table public.units add column if not exists project_id uuid references public.projects(id) on delete cascade;
alter table public.units add column if not exists unit_number text;
alter table public.units add column if not exists type text;
alter table public.units add column if not exists size numeric;
alter table public.units add column if not exists price numeric;
alter table public.units add column if not exists status text default 'available';
alter table public.units add column if not exists main_image text;
-- حقول نموذج الوحدة (تفاصيل النموذج وعدد النموذج)
alter table public.units add column if not exists model_details text;
alter table public.units add column if not exists model_count integer;

-- ---------------------------------------------------------
-- جدول الملفات الإضافية (project_files)
-- ---------------------------------------------------------
create table if not exists public.project_files (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.project_files add column if not exists project_id uuid references public.projects(id) on delete cascade;
alter table public.project_files add column if not exists file_url text;
alter table public.project_files add column if not exists name text;
alter table public.project_files add column if not exists type text;

-- 3. تفعيل الحماية (RLS)
alter table public.projects enable row level security;
alter table public.project_images enable row level security;
alter table public.project_sections enable row level security;
alter table public.units enable row level security;
alter table public.project_files enable row level security;

-- 4. إنشاء المستخدم المسؤول (Admin User Creation)
-- ملاحظة: نقوم بإدخاله مباشرة في auth.users
-- كلمة السر: Zohair@1999@

DO $$
DECLARE
  user_id uuid := gen_random_uuid();
BEGIN
  -- التحقق مما إذا كان المستخدم موجوداً لتجنب التكرار
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'zizoalzohairy@gmail.com') THEN
    INSERT INTO auth.users (
      instance_id,
      id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      recovery_sent_at,
      last_sign_in_at,
      raw_app_meta_data,
      raw_user_meta_data,
      created_at,
      updated_at,
      confirmation_token,
      email_change,
      email_change_token_new,
      recovery_token
    ) VALUES (
      '00000000-0000-0000-0000-000000000000',
      user_id,
      'authenticated',
      'authenticated',
      'zizoalzohairy@gmail.com',
      crypt('Zohair@1999@', gen_salt('bf')), -- تشفير كلمة السر
      now(),
      now(),
      now(),
      '{"provider":"email","providers":["email"]}',
      '{"full_name":"Admin Zohair"}',
      now(),
      now(),
      '',
      '',
      '',
      ''
    );

    -- إضافة الهوية (Identity) لتمكين تسجيل الدخول
    INSERT INTO auth.identities (
      id,
      user_id,
      identity_data,
      provider,
      provider_id,
      last_sign_in_at,
      created_at,
      updated_at
    ) VALUES (
      gen_random_uuid(),
      user_id,
      format('{"sub":"%s","email":"zizoalzohairy@gmail.com"}', user_id)::jsonb,
      'email',
      user_id::text,
      now(),
      now(),
      now()
    );
  END IF;
END $$;

-- 5. سياسات الأمان (Policies)
-- حذف السياسات القديمة لتجنب التكرار عند إعادة التشغيل
drop policy if exists "Public Read Projects" on public.projects;
drop policy if exists "Public Read Images" on public.project_images;
drop policy if exists "Public Read Sections" on public.project_sections;
drop policy if exists "Public Read Units" on public.units;
drop policy if exists "Public Read Files" on public.project_files;

drop policy if exists "Admin Full Access Projects" on public.projects;
drop policy if exists "Admin Full Access Images" on public.project_images;
drop policy if exists "Admin Full Access Sections" on public.project_sections;
drop policy if exists "Admin Full Access Units" on public.units;
drop policy if exists "Admin Full Access Files" on public.project_files;

-- السماح للجميع بالقراءة (Public Read)
create policy "Public Read Projects" on public.projects for select using (true);
create policy "Public Read Images" on public.project_images for select using (true);
create policy "Public Read Sections" on public.project_sections for select using (true);
create policy "Public Read Units" on public.units for select using (true);
create policy "Public Read Files" on public.project_files for select using (true);

-- السماح للمدير فقط بالتعديل والإضافة والحذف (Admin Full Access)
create policy "Admin Full Access Projects" on public.projects for all using ((auth.jwt() ->> 'email') = 'zizoalzohairy@gmail.com');
create policy "Admin Full Access Images" on public.project_images for all using ((auth.jwt() ->> 'email') = 'zizoalzohairy@gmail.com');
create policy "Admin Full Access Sections" on public.project_sections for all using ((auth.jwt() ->> 'email') = 'zizoalzohairy@gmail.com');
create policy "Admin Full Access Units" on public.units for all using ((auth.jwt() ->> 'email') = 'zizoalzohairy@gmail.com');
create policy "Admin Full Access Files" on public.project_files for all using ((auth.jwt() ->> 'email') = 'zizoalzohairy@gmail.com');

-- 6. إنشاء Buckets للتخزين (Storage)

drop policy if exists "Public Access Files" on storage.objects;
drop policy if exists "Admin Upload Files" on storage.objects;
drop policy if exists "Admin Update Files" on storage.objects;
drop policy if exists "Admin Delete Files" on storage.objects;

create policy "Public Access Files" on storage.objects for select using ( bucket_id = 'files' );
create policy "Admin Upload Files" on storage.objects for insert with check ( bucket_id = 'files' and (auth.jwt() ->> 'email') = 'zizoalzohairy@gmail.com' );
create policy "Admin Update Files" on storage.objects for update using ( bucket_id = 'files' and (auth.jwt() ->> 'email') = 'zizoalzohairy@gmail.com' );
create policy "Admin Delete Files" on storage.objects for delete using ( bucket_id = 'files' and (auth.jwt() ->> 'email') = 'zizoalzohairy@gmail.com' );
