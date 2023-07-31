import {
  Apple,
  BadgeDollarSign,
  Blinds,
  Bus,
  Coins,
  Home,
  PiggyBank,
  Plane,
  RollerCoaster,
  Rotate3d,
  ShoppingBag,
  Siren,
  Syringe,
  User2,
  WalletCards,
} from "lucide-react";
import { cn } from "src/lib/utils";

type CategoryProps = {
  categoryName: string;
  showDescriptor?: boolean;
  className?: string;
};
/*
    Personal finance categories: 
            INCOME
            TRANSFER_IN
            TRANSFER_OUT
            LOAN_PAYMENTS
            BANK_FEES
            ENTERTAINMENT
            FOOD_AND_DRINK
            GENERAL_MERCHANDISE
            HOME_IMPROVEMENT
            MEDICAL
            PERSONAL_CARE
            GENERAL_SERVICES
            GOVERNMENT_AND_NON_PROFIT
            TRANSPORTATION
            TRAVEL
            RENT_AND_UTILITIES
*/

const Income: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1b5eb6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-badge-dollar-sign"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  );
};

const Transfer: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1e5fb3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-banknote"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
};

const Loan: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1e5fb3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-landmark"
    >
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
};

const BankFees: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1e5fb3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-credit-card"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
};

const Entertainment: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1e5fb3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-ferris-wheel"
    >
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v4" />
      <path d="m6.8 15-3.5 2" />
      <path d="m20.7 7-3.5 2" />
      <path d="M6.8 9 3.3 7" />
      <path d="m20.7 17-3.5-2" />
      <path d="m9 22 3-8 3 8" />
      <path d="M8 22h8" />
      <path d="M18 18.7a9 9 0 1 0-12 0" />
    </svg>
  );
};

const FoodAndDrink: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1e5fb3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sandwich"
    >
      <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
      <path d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83" />
      <path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" />
      <path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" />
    </svg>
  );
};

const Shopping: React.FC = () => {
  // General Merchandise & Services
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1e5fb3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-shopping-bag"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
};

const HomeImprovement: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1e5fb3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-home"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
};

const Medical: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1b5eb6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-pill"
    >
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
};

const Government: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1e5fb3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-landmark"
    >
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
};

const Transportation: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1e5fb3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-car"
    >
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
      <circle cx="6.5" cy="16.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </svg>
  );
};

const PersonalCare: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1b5eb6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-laugh"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
};

const Travel: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1b5eb6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-plane"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
};

const Rent: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1b5eb6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-home"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
};

const CategoryComponent = (props: CategoryProps) => {
  const { categoryName, showDescriptor, className } = props;
  let descriptor = null;
  if (showDescriptor) {
    descriptor = sanitizeCategory(categoryName);
  }

  if (categoryName == "INCOME") {
    return (
      <div className="flex flex-row">
        <Coins className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "TRANSFER_IN" || categoryName == "TRANSFER_OUT") {
    return (
      <div className="flex flex-row ">
        <Rotate3d className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "LOAN_PAYMENTS") {
    return (
      <div className="flex flex-row ">
        <WalletCards className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "BANK_FEES") {
    return (
      <div className="flex flex-row ">
        <BadgeDollarSign className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "ENTERTAINMENT") {
    return (
      <div className="flex flex-row ">
        <RollerCoaster className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "FOOD_AND_DRINK") {
    return (
      <div className="flex flex-row ">
        <Apple className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (
    categoryName == "GENERAL_MERCHANDISE" ||
    categoryName == "GENERAL_SERVICES"
  ) {
    return (
      <div className="flex flex-row ">
        <ShoppingBag className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "HOME_IMPROVEMENT") {
    return (
      <div className="flex flex-row ">
        <Home className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "MEDICAL") {
    return (
      <div className="flex flex-row ">
        <Syringe className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "PERSONAL_CARE") {
    return (
      <div className="flex flex-row ">
        <User2 className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "GOVERNMENT_AND_NON_PROFIT") {
    return (
      <div className="flex flex-row ">
        <Siren className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "TRANSPORTATION") {
    return (
      <div className="flex flex-row ">
        <Bus className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "TRAVEL") {
    return (
      <div className="flex flex-row ">
        <Plane className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else if (categoryName == "RENT_AND_UTILITIES") {
    return (
      <div className="flex flex-row ">
        <Blinds className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  } else {
    return (
      <div className="flex flex-row ">
        <PiggyBank className={cn("w-5 h-10", className)} />
        {descriptor}
      </div>
    );
  }
};

function sanitizeCategory(categoryName: string) {
  switch (categoryName) {
    case "INCOME":
      return <p className="text-xs mt-1 font-bold">{"Income"}</p>;
    case "TRANSFER_IN":
      return <p className="text-xs mt-1 font-bold">{"Money transfer"}</p>;
    case "TRANSFER_OUT":
      return <p className="text-xs mt-1 font-bold">{"Money transfer"}</p>;
    case "LOAN_PAYMENTS":
      return <p className="text-xs mt-1 font-bold">{"Loan Payments"}</p>;
    case "BANK_FEES":
      return <p className="text-xs mt-1 font-bold">{"Bank fees"}</p>;
    case "ENTERTAINMENT":
      return <p className="text-xs mt-1 font-bold">{"Entertainment"}</p>;
    case "FOOD_AND_DRINK":
      return <p className="text-xs mt-1 font-bold">{"Food and Drink"}</p>;
    case "GENERAL_MERCHANDISE":
      return <p className="text-xs mt-1 mr-1 font-bold">{"Shopping"}</p>;
    case "GENERAL_SERVICES":
      return <p className="text-xs mt-1 mr-1 font-bold">{"Shopping"}</p>;
    case "HOME_IMPROVEMENT":
      return <p className="text-xs mt-1 font-bold">{"Home Improvement"}</p>;
    case "MEDICAL":
      return <p className="text-xs mt-1 font-bold">{"Medical"}</p>;
    case "PERSONAL_CARE":
      return <p className="text-xs mt-1 font-bold">{"Personal care"}</p>;
    case "GOVERNMENT_AND_NON_PROFIT":
      return <p className="text-xs mt-1 font-bold">{"Government"}</p>;
    case "TRANSPORTATION":
      return <p className="text-xs mt-1 font-bold">{"Transportation"}</p>;
    case "TRAVEL":
      return <p className="text-xs mt-1 font-bold">{"Travel"}</p>;
    case "RENT_AND_UTILITIES":
      return <p className="text-xs mt-1 font-bold">{"Rent and utilities"}</p>;
    default:
      return <p className="text-xs mt-1 font-bold">{"Other"}</p>;
  }
}

export { CategoryComponent, sanitizeCategory };
