type Props = {
  label: string;
};

export default function CategoryItem({ label }: Props) {
  return (
    <span className="w-fit mb-2 mr-2 inline-block text-[13px] font-medium text-gray-1000 py-[3px] px-3 duration-150 rounded-lg bg-decorative/[0.33] scale-[.99] hover:cursor-pointer hover:scale-[1.06] hover:bg-decorative/50">
      {label}
    </span>
  );
}
