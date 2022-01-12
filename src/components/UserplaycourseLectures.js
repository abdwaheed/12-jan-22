import React from 'react'
import { Link } from 'react-router-dom'

export default function UserplaycourseLectures({ path, lecture, course, cTitle, imgSrc }) {
  return (
    <div class="col-md-6 mb-3">
      <div class="co">
        <div>
          <img src={imgSrc} alt="" class="less" />
        </div>
        <div class=" good">
          <Link className='text-decoration-none'
            to={{
              pathname: path,
              state: {
                title: cTitle,
                lecture: lecture,
                courseId: course
              }
            }}> <h5 className='mt-2 m-0 text-dark'>{course === true ? 'passed this quiz' : cTitle}</h5>

            {path != '' && path != '/userquiztaking' ?
              <>{path != '/teacherquiz' ? <p className='text-dark'>Lecture 1</p> : <p className='text-dark'>Edit Question</p>}</>
              :
              <h5 className='text-dark mt-4'>Attempt Quiz</h5>
            }
          </Link>

          {/* <h4 className='pt-3 text-dark'>Lecture1</h4> */}
        </div>
      </div>
    </div>
  )
}
