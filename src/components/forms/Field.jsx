export const contactInputClass =
  "w-full p-4 rounded-xl bg-[var(--primary-color)] border border-transparent focus:border-[var(--accent-color-1)] focus:outline-none text-[var(--text-dark)]";

export const enquiryInputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[var(--accent-color-1)]";

export const selectArrowClass =
  "appearance-none bg-no-repeat bg-right-4 pr-12 custom-select-arrow";

export function Field({ label, error, required, children }) {
  return (
    <div>
      {label ? (
        <label className="block text-sm mb-1 font-medium">
          {label}
          {required ? " *" : ""}
        </label>
      ) : null}
      {children}
      {error ? <p className="text-red-500 text-sm mt-1">{error}</p> : null}
    </div>
  );
}
