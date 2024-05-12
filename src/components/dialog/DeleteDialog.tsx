import { cn } from "@/helpers/utils";
import { useDialogStore } from "@/store/dialog.store";

interface DeleteDialogProps {
  onSubmit: () => void;
}
export default function DeleteDialog({ onSubmit }: DeleteDialogProps) {
  const { isShow, resetDialog, title } = useDialogStore((store) => store);
  return (
    <>
      <div
        id="popup-modal"
        className={cn(
          "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-black/30",
          isShow ? "flex" : "hidden"
        )}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="p-4 md:p-5 text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500">
                {title}
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                onClick={onSubmit}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                onClick={resetDialog}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
