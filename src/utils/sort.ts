/**
 * Created by trungquandev.com's author on March 28, 2021
 * Updated by trungquandev.com's author on Jun 28, 2023
 * ---
 * Order an array of objects based on another array & return new Ordered Array
 * The original array will not be modified.
 * ---
 * @param {*} originalArray
 * @param {*} orderArray
 * @param {*} key = Key to order
 * @return new Ordered Array
 *
 * For Vietnamese with love :D
 * Xác định các phần tử trong array gốc ban đầu (originalArray) xem nó nằm ở đâu trong array thứ 2 (orderArray) (là array mà mình dùng để sắp xếp) bằng cách tìm index (indexOf) rồi sẽ sắp xếp theo index đó bằng hàm sort của Javascript.
 */
import { CardType, ColumnType } from "../apis/mock-data";
const mapOrder = <T extends CardType | ColumnType>(
  originalArray?: T[],
  orderArray?: string[],
  key?: string
): T[] => {
  if (!originalArray || !orderArray || !key) return [];

  const clonedArray = [...originalArray];
  const orderedArray = clonedArray.sort(
    (a: CardType | ColumnType, b: CardType | ColumnType) => {
      return (
        orderArray.indexOf(a[key as keyof (CardType | ColumnType)] as string) -
        orderArray.indexOf(b[key as keyof (CardType | ColumnType)] as string)
      );
    }
  );

  return orderedArray;
};
export default mapOrder;
