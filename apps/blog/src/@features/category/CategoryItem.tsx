type Props = {
  label: string;
};

export const CategoryItem = ({ label }: Props) => (
  <span className="text-gray-1000 bg-decorative/[0.33] hover:bg-decorative/50 mb-2 mr-2 inline-block w-fit scale-[.99] rounded-lg py-[3px] px-3 text-[13px] font-medium duration-150 hover:scale-[1.06] hover:cursor-pointer">
    {label}
  </span>
);
