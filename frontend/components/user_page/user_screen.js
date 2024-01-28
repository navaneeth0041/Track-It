
import { Eye } from 'react-feather';
const index = () => {
  const users = [
    {
      "username":"User 1",
      "node_address":"jjsjjsjsjsjssjsjjsjsjsjsjsjjs",
      "isAdmin":true
    },
    {
      "username":"User 2",
      "node_address":"hhahahahhahahahahahahhahahaha",
      "isAdmin":false
    }
  ]
  return (
    <div>
      <div className="w-full lg:h-96 xl:h-120 bg-white px-4 rounded-lg shadow-md">
        <div className="h-[96%] ">
          <table className="table-fixed w-full">
            <thead>
              <tr className="flex justify-between border-b border-gray-200 py-2 w-full">
                <th className="w-[30%] flex justify-start">Users</th>
                <th className="w-[30%] flex justify-start">Node adress</th>
                <th className="w-[30%] flex justify-start">Access Level</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user)=> (
                  <tr className="flex justify-between border-b border-gray-200 py-3 w-full">
                  <td className="w-[30%] flex justify-start">
                    <div className="flex items-between gap-x-2">
                      <div>
                        <p className="lg:text-xs xl:text-sm">{user["username"]}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[30%] flex justify-start]">
                    <div>
                      <p>{user["node_address"]}</p>
                    </div>
                  </td>
                  <td className="w-[30%] flex justify-start]">
                    <div>
                    <p>{user["isAdmin"].toString()}</p>
                    </div>
                  </td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default index;
