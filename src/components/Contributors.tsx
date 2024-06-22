import Data from "../data/Contributors.json";

export default function Contributors() {
  return (
    <div className="mt-20 mb-40">
      <h1 className="font-display mb-5 text-zinc-300 text-center text-4xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-7xl">
        Hall Of Fame
      </h1>
      <h3 className="font-display mb-20 text-zinc-100 text-center text-l font-extrabold leading-none tracking-tight md:text-xl lg:text-2xl">
        Top Contributors for this Season!
      </h3>
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full flex flex-wrap justify-center">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                >
                  GitHub
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                >
                  College
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                >
                  Blog Link
                </th>
              </tr>
            </thead>
            <tbody className="bg-black/50 backdrop-blur-sm divide-y divide-gray-700">
              {Data.sort((a, b) => a.name.localeCompare(b.name)).map((student, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                    <a
                      href={"https://github.com/" + student.username}
                      className="text-blue-400 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {student.username}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                    {student.college}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                    {student.blog_link == "" ? (
                      <p className="text-blue-400 hover:text-red-500">Visit</p>
                    ) : (
                      <a
                        href={student.blog_link}
                        className="text-blue-400 hover:text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
