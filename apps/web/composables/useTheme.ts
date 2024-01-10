export default function () {
    return useState<"light" | "dark">("theme", () => "light");
}
