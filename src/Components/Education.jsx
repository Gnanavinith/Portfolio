import React from "react";

const Education = () => {
  return (
    <div className="max-w-[900px] h-auto md:w-3/4 mt-20">
      <div className="grid grid-cols-1 gap-10">
        {/* Diploma */}
        <div className="flex flex-col md:flex-row justify-between p-7 rounded shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300 gap-y-6 md:gap-x-10">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-lg font-bold">Diploma </p>
            <p className="text-gray-600 font-semibold">2019 - 2021</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">
              CIT SANDWICH POLYTECHNIC COLLEGE
            </p>
            <p className="text-gray-600">
              Computer Science & Engineering - <span className="font-bold">89%</span>
            </p>
          </div>
        </div>

        {/* Bachelor of Engineering */}
        <div className="flex flex-col md:flex-row justify-between p-7 rounded shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300 gap-y-6 md:gap-x-10">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-lg font-bold">Bachelor of Engineering</p>
            <p className="text-gray-600 font-semibold">2021 - 2024</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">
              SNS COLLEGE OF TECHNOLOGY
            </p>
            <p className="text-gray-600">
              Computer Science & Engineering - <span className="font-bold">8.77 CGPA</span>
            </p>
          </div>
        </div>

        {/* Training Programs */}
        <div className="flex flex-col md:flex-row justify-between p-7 rounded shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300 gap-y-6 md:gap-x-10">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-lg font-bold">Training Programs</p>
            <p className="text-gray-600 font-semibold">Jun 2024 - Dec 2024</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">IPCS Global</p>
            <p className="text-gray-600">
              MERN Full Stack Development Training + Internship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
