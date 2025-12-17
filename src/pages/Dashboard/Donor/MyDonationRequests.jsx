import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Loader/Loader";
import api from "../../../services/api";

const MyDonationRequests = () => {
  const { user } = useAuth();

  const { data = [], isLoading } = useQuery({
    queryKey: ["my-donation-requests", user?.email],
    queryFn: async () => {
      const res = await api.get(`/donation-requests?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Donation Requests</h1>

      {data.length === 0 && (
        <p className="text-gray-500">You have no donation requests yet.</p>
      )}

      {data.length > 0 && (
        <div className="space-y-3">
          {data.map((item) => (
            <div
              key={item._id}
              className="p-4 bg-white rounded shadow flex justify-between"
            >
              <div>
                <p className="font-semibold">{item.recipientName}</p>
                <p className="text-sm text-gray-500">
                  {item.recipientDistrict}, {item.recipientUpazila}
                </p>
              </div>

              <span
                className={`badge ${
                  item.status === "pending"
                    ? "badge-warning"
                    : item.status === "done"
                    ? "badge-success"
                    : "badge-info"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonationRequests;
