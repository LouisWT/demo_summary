// p157
// 输入一棵二叉树，输出它的镜像

function Mirror(root) {
    if (!root) return;
    if (root.left != null || root.right != null) {
        const temp = root.left;
        root.left = root.right;
        root.right = temp;
    }
    Mirror(root.left);
    Mirror(root.right);
    return root;
}
module.exports = {
    Mirror: Mirror
};