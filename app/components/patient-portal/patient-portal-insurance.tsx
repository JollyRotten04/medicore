import FadeIn from "../fade-in";

interface InsurancePlan {
    provider: string;
    planName: string;
    policyNumber: string;
    memberId: string;
    status: "Active" | "Inactive" | "Pending";
    validUntil: string;
}

interface CoverageItem {
    label: string;
    value: string;
}

interface Claim {
    description: string;
    date: string;
    amount: string;
    status: "Approved" | "Pending" | "Denied";
}

const insurancePlan: InsurancePlan = {
    provider: "Maxicare Healthcare Corporation",
    planName: "Platinum Health Plan",
    policyNumber: "MXC-2026-004821",
    memberId: "M-1029384756",
    status: "Active",
    validUntil: "December 31, 2026",
};

const coverageItems: CoverageItem[] = [
    { label: "Room & Board", value: "Private Room, up to ₱5,000/day" },
    { label: "Doctor's Fees", value: "100% covered" },
    { label: "Emergency Care", value: "Covered, no deductible" },
    { label: "Prescription Drugs", value: "80% covered" },
    { label: "Annual Limit", value: "₱1,500,000" },
];

const claims: Claim[] = [
    { description: "General Checkup - Dr. Wang Wong", date: "June 25, 2026", amount: "₱2,500", status: "Approved" },
    { description: "Blood Panel Laboratory Test", date: "June 12, 2026", amount: "₱1,800", status: "Approved" },
    { description: "Hypertension Medication Refill", date: "June 5, 2026", amount: "₱950", status: "Pending" },
];

function statusBadgeClasses(status: string) {
    switch (status) {
        case "Active":
        case "Approved":
            return "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300";
        case "Pending":
            return "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300";
        case "Inactive":
        case "Denied":
            return "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300";
        default:
            return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
}

export default function PatientPortalInsurance() {
    return (
        <>
            <FadeIn>
                <div className="flex flex-col">

                    <div className="flex flex-col gap-1">
                        <p className="text-lg text-black dark:text-white font-bold">Insurance</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                            View your coverage details, plan status, and recent claims
                        </p>
                    </div>

                    {/* Plan overview card */}
                    <div className="flex flex-col w-full bg-white dark:bg-gray-900 rounded-lg p-4 mt-6">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col">
                                <p className="text-xs text-black dark:text-white font-semibold">{insurancePlan.provider}</p>
                                <p className="text-base text-black dark:text-white font-semibold mt-0.5">{insurancePlan.planName}</p>
                            </div>
                            <span className={`text-[0.65rem] font-semibold px-2 py-1 rounded-full ${statusBadgeClasses(insurancePlan.status)}`}>
                                {insurancePlan.status}
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex justify-between">
                                <p className="text-xs text-black dark:text-white font-light">Policy Number</p>
                                <p className="text-xs text-black dark:text-white font-medium">{insurancePlan.policyNumber}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs text-black dark:text-white font-light">Member ID</p>
                                <p className="text-xs text-black dark:text-white font-medium">{insurancePlan.memberId}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs text-black dark:text-white font-light">Valid Until</p>
                                <p className="text-xs text-black dark:text-white font-medium">{insurancePlan.validUntil}</p>
                            </div>
                        </div>

                        <button className="bg-[#46667a] cursor-pointer dark:bg-sky-500/25 w-full text-white font-semibold text-sm p-2 px-4 rounded-lg text-center mt-4">
                            Contact Insurance Provider
                        </button>
                    </div>

                    {/* Coverage details */}
                    <div className="flex flex-col gap-2 mt-6">
                        <p className="text-xs text-black dark:text-white font-normal">Coverage Details</p>

                        <div className="flex flex-col rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                            {coverageItems.map((item, idx) => (
                                <div
                                    key={item.label}
                                    className={`flex items-center justify-between bg-white dark:bg-gray-900 px-3 py-3 ${
                                        idx !== coverageItems.length - 1
                                            ? "border-b border-gray-100 dark:border-gray-800"
                                            : ""
                                    }`}
                                >
                                    <p className="text-xs text-black dark:text-white font-light">{item.label}</p>
                                    <p className="text-xs text-black dark:text-white font-medium text-right">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent claims */}
                    <div className="flex flex-col gap-2 mt-6 mb-4">
                        <p className="text-xs text-black dark:text-white font-normal">Recent Claims</p>

                        <div className="flex flex-col rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                            {claims.map((claim, idx) => (
                                <div
                                    key={`${claim.description}-${claim.date}`}
                                    className={`flex items-center justify-between bg-white dark:bg-gray-900 px-3 py-3 ${
                                        idx !== claims.length - 1
                                            ? "border-b border-gray-100 dark:border-gray-800"
                                            : ""
                                    }`}
                                >
                                    <div className="flex flex-col">
                                        <p className="text-sm text-black dark:text-white font-semibold">{claim.description}</p>
                                        <p className="text-xs text-black dark:text-white font-light mt-0.5">{claim.date} &middot; {claim.amount}</p>
                                    </div>
                                    <span className={`text-[0.65rem] font-semibold px-2 py-1 rounded-full whitespace-nowrap ${statusBadgeClasses(claim.status)}`}>
                                        {claim.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </>
    );
}