export default function () {
    return useState<boolean>("loggedUser", () => true);
}
