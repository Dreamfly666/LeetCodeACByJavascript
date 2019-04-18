// 88.Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @returns {void} do not return anything, modify nums1 in-place instead
 *
 */

var merge = function (nums1, m, nums2, n) {
    let i = m - 1,
        j = n - 1,
        k = m + n - 1
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j])
            nums1[k--] = nums1[i--]
        else
            nums1[k--] = nums2[j--]
    }
    while (j >= 0)
        nums1[k--] = nums2[j--]
}

// runtime 56ms beats 100% memory 33.8mb beats 51.49%
