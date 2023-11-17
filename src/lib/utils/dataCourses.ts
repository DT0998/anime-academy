import course1 from '$assets/img/online-course/course-1.png';
import course2 from '$assets/img/online-course/course-2.png';
import course3 from '$assets/img/online-course/course-3.png';
import background1 from '$assets/img/online-course/course-details/course-1.webp';
import background2 from '$assets/img/online-course/course-details/course-2.webp';
import background3 from '$assets/img/online-course/course-details/course-3.webp';
import course1_desc from '$assets/img/online-course/course-details/ds_course1.webp';
import course2_desc from '$assets/img/online-course/course-details/ds_course2.webp';
interface ICourse {
	id: number;
	titleMain: string;
	titleSub: string;
	content: string;
	price?: number;
	img: string;
	authorName: string;
	detail?: ICourseDetail;
}
interface ICourseDetail {
	background: string;
	enroll: string;
	img_description: string;
	total: number;
	listLectures: ILecture[];
}
interface ILecture {
	title: string;
	lectures: ILectureItem[];
}
interface ILectureItem {
	id: number;
	title: string;
}
export const listCourses: ICourse[] = [
	{
		id: 1,
		titleMain: 'Pro Techniques, Character',
		titleSub: 'Colouring and Background Design:',
		content: 'Let’s take our skills up to the next level!',
		price: 465,
		img: course1,
		authorName: 'Anime Art Academy Teachers',
		detail: {
			background: background1,
			enroll: '$530',
			img_description: course1_desc,
			total: 3,
			listLectures: [
				{
					title: 'Free Taster Lessons',
					lectures: [
						{
							id: 1,
							title: 'Colouring Lesson 1 - Getting Started - The Basics of Colouring-Free!'
						},
						{
							id: 2,
							title: 'Professional Techniques 2 - Professional Tips for Anime Colouring-Free'
						},
						{
							id: 3,
							title: 'Professional Techniques 4 - Professional Techniques for Drawing Hair-Free'
						}
					]
				}
			]
		}
	},
	{
		id: 2,
		titleMain: 'Drawing Anime and Manga',
		titleSub: 'Characters: Beginner to',
		content: 'A perfect introduction to anime illustration!',
		price: 325,
		img: course2,
		authorName: 'Anime Art Academy Teachers',
		detail: {
			background: background2,
			enroll: '$325',
			img_description: course2_desc,
			total: 3,
			listLectures: [
				{
					title: 'Free Taster Lessons',
					lectures: [
						{
							id: 4,
							title: 'The Basics of Balanced Character Design-Free!'
						},
						{
							id: 5,
							title: 'Drawing characters in three-quarter profile-Free'
						},
						{
							id: 6,
							title: 'Drawing female characters in clothes-Free'
						}
					]
				}
			]
		}
	},
	{
		id: 3,
		titleMain: 'Learn how to illustrate in manga',
		titleSub: 'Style Japanese professionals',
		content:
			'From beginner to advanced! Loaded with professional Japanese techniques! Including tutorials for drawing popular anime characters!',
		img: course3,
		authorName: 'Anime Art Academy Staff',
		detail: {
			background: background3,
			enroll: 'Free',
			img_description: course2_desc,
			total: 3,
			listLectures: [
				{
					title: 'Free Taster Lessons',
					lectures: [
						{
							id: 7,
							title: 'The Basics of Balanced Character Design-Free!'
						},
						{
							id: 8,
							title: 'Drawing balanced faces: female characters'
						},
						{
							id: 9,
							title: 'Drawing balanced faces: male characters'
						}
					]
				}
			]
		}
	}
];
