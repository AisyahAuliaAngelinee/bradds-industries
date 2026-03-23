import CartContent from "./_component/CartContent";

export default async function CartPage({
	searchParams,
}: {
	searchParams: Promise<{ step?: string }>;
}) {
	const params = await searchParams; // ✅ unwrap

	const activeStep = parseInt(params.step || "1");

	return <CartContent activeStep={activeStep} />;
}
