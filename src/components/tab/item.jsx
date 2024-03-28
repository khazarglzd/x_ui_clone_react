import PropTypes from "prop-types";
import { useTab } from "../tab/context";
import classNames from "classnames";

export default function Item({ children, id }) {

    const { active, setActive } = useTab()

    return (
        <button
            type="button"
            onClick={() => {
                setActive(id)
            }}
            className="flex-auto text-center  transition-colors"
        >
            <div className={classNames("h-[3.313rem] relative inline-flex items-center", {
                "font-bold": active === id,
                "font-medium": active !== id
            })}>
                {children}
                {active === id && (
                    <div className="h-[4px] absolute bottom-0 left-0 w-full rounded-full " />
                )}
            </div>
        </button>
    )
}

Item.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    id: PropTypes.string
}