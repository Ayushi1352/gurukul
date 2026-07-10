import React from 'react';
import CoursesHero from '@/components/courses/CoursesHero';
import CourseList from '@/components/courses/CourseList';

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <CoursesHero />
      <CourseList />
    </main>
  );
}
