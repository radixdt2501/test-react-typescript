const SpellProperties: React.FC<{ title: string; description?: string | number | boolean | string[] }> = ({
	title,
	description,
}) => {
	return (
		<div  className="border-t border-gray-200 pt-3">
			<dt data-testid="dt" className="font-medium text-base text-gray-900">{title}:</dt>
			<dd data-testid="dd" className="mt-1 text-base text-gray-500">{description ? description : '--'}</dd>
		</div>
	);
};

export default SpellProperties;
