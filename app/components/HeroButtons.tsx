import Button from "./Button";

export default function HeroButtons() {
  return (
    <div className="flex fixed top-1/2 pt-8 left-1/2 -translate-x-1/2">
      <Button name="Experience" password={false} link="#experience" />
      <Button name="Projects" password={false} link="#projects" />
      <Button name="Contact" password={false} link="#contact" />
    </div>
  );
}
